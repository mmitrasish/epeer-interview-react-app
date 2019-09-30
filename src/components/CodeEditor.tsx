import React from "react";
import CodeMirror from "react-codemirror";
import { database } from "firebase";

require("codemirror/lib/codemirror.css");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/python/python");
require("codemirror/theme/dracula.css");
require("codemirror/theme/monokai.css");
require("codemirror/theme/material-palenight.css");
require("codemirror/theme/ambiance.css");
require("codemirror/theme/cobalt.css");
require("codemirror/theme/eclipse.css");
require("codemirror/theme/elegant.css");
require("codemirror/theme/shadowfox.css");
require("codemirror/theme/oceanic-next.css");
require("codemirror/theme/solarized.css");

interface ICursorPosition {
  line: number;
  ch: number;
}
interface ICodeEditorState {
  code: string;
  cursorPos: ICursorPosition;
  createdon: string;
}
interface ICodeEditorProps {
  sessionId: string;
  codemirrorTheme: string;
  codemirrorMode: string;
}

class CodeEditor extends React.Component<ICodeEditorProps, ICodeEditorState> {
  private codemirror: any;
  private codeRef: any;

  constructor(props: ICodeEditorProps) {
    super(props);
    this.state = {
      code: "// start coding",
      cursorPos: {
        line: 0,
        ch: 0
      },
      createdon: ""
    };
  }
  componentDidMount = () => {
    console.log(this.props.sessionId, this.props.codemirrorTheme);
    database()
      .ref()
      .child("Sessions")
      .child(this.props.sessionId)
      .once("value")
      .then(snapshot => {
        console.log(snapshot.val());
        this.setState(
          {
            code: snapshot.val().content + "",
            createdon: snapshot.val().createdon
          },
          () => {
            let content = snapshot.val().content;
            //   console.log(this.codemirror.getCodeMirror());

            this.codemirror.getCodeMirror().setValue(content);
          }
        );
        this.codeRef = database()
          .ref()
          .child("Sessions")
          .child(this.props.sessionId);
        this.codeRef.on("value", (snapshot: any) => {
          this.setState({
            code: snapshot.val().content
          });
          var currentCursorPos = this.state.cursorPos;
          this.codemirror.getCodeMirror().setValue(snapshot.val().content);
          this.setState({ cursorPos: currentCursorPos });
          this.changeCursorPos();
        });
      })
      .catch(e => {
        console.log(e);
        this.codemirror.getCodeMirror().setValue("No Sessions Found!");
      });
  };
  changeCursorPos = () => {
    const { line, ch } = this.state.cursorPos;
    this.codemirror.getCodeMirror().doc.setCursor(line, ch);
  };
  onChange = (newVal: any, change: any) => {
    console.log(newVal, change);
    this.setState({
      cursorPos: {
        line: this.codemirror.getCodeMirror().doc.getCursor().line,
        ch: this.codemirror.getCodeMirror().doc.getCursor().ch
      }
    });
    this.codeRef.child("content").set(newVal);
  };
  render() {
    console.log(this.props.codemirrorTheme);
    return (
      <div>
        <CodeMirror
          ref={(r: any) => (this.codemirror = r)}
          className="codeHeight"
          value={this.state.code}
          onChange={this.onChange}
          options={{
            theme: this.props.codemirrorTheme,
            lineNumbers: true,
            mode: this.props.codemirrorMode,
            extraKeys: {
              "Ctrl-Space": "autocomplete"
            }
          }}
        />
      </div>
    );
  }
}
export default CodeEditor;
