import React from "react";
import CodeEditor from "../components/CodeEditor";
import { withRouter, RouteComponentProps } from "react-router-dom";
import VideoChat from "../components/VideoChat";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}
interface IPracticeState {
  codemirrorTheme: string;
  codemirrorMode: string;
}

class PracticePage extends React.Component<Props, IPracticeState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      codemirrorTheme: "material-palenight",
      codemirrorMode: "javascript"
    };
  }
  changeTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ codemirrorTheme: event.target.value });
  };
  changeMode = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ codemirrorMode: event.target.value });
  };
  render() {
    return (
      <div className="container-fluid noPadMar">
        <div className="row customMar">
          <div className="col-md-10 p-2">
            <div className="rounded border border-secondary shadow mr-3 ml-4 my-3">
              <div className="p-3 border-bottom border-secondary">
                <select
                  className="custom-select my-1 mr-sm-2 col-md-2"
                  id="inlineFormCustomSelectPref"
                  onChange={this.changeTheme}
                >
                  <option value="material-palenight">Material</option>
                  <option value="ambiance">Ambiance</option>
                  <option value="cobalt">Cobalt</option>
                  <option value="dracula">Dracula</option>
                  <option value="eclipse">Eclipse</option>
                  <option value="monokai">Monokai</option>
                  <option value="elegant">Elegant</option>
                  <option value="oceanic-next">Oceanic</option>
                  <option value="shadowfox">Shadowfox</option>
                  <option value="solarized light">Solarized</option>
                </select>
                <select
                  className="custom-select my-1 mr-sm-2 col-md-2"
                  id="inlineFormCustomSelectPref"
                  onChange={this.changeMode}
                >
                  <option value="javascript">Javascript</option>
                  <option value="python">Python</option>
                </select>
              </div>
              <CodeEditor
                codemirrorTheme={this.state.codemirrorTheme}
                sessionId={this.props.match.params.id}
                codemirrorMode={this.state.codemirrorMode}
              />
            </div>
          </div>
          <div className="col-md-2 p-2">
            <VideoChat />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PracticePage);
