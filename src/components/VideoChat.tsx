import React from "react";
const OT = require("@opentok/client");
interface IVideoChatProps {}
interface IVideoChatState {
  apiKey: string;
  sessionId: string;
  token: string;
}
class VideoChat extends React.Component<IVideoChatProps, IVideoChatState> {
  private publisher: any;
  private subscriber: any;
  constructor(props: IVideoChatProps) {
    super(props);
    this.state = {
      apiKey: "46426812",
      sessionId:
        "2_MX40NjQyNjgxMn5-MTU2OTM4NTQ3MDg0Mn5Fa2F2Tjk0Z3lPRWNFTWhjRWkvczdxVyt-UH4",
      token:
        "T1==cGFydG5lcl9pZD00NjQyNjgxMiZzaWc9NjM0ZTYzNWIyY2VmMGY1MTQ5M2NjZjU3MmU5NzY0MTg4NWU2ZDk3YjpzZXNzaW9uX2lkPTJfTVg0ME5qUXlOamd4TW41LU1UVTJPVE00TlRRM01EZzBNbjVGYTJGMlRqazBaM2xQUldORlRXaGpSV2t2Y3pkeFZ5dC1VSDQmY3JlYXRlX3RpbWU9MTU2OTQ4OTE2NyZub25jZT0wLjMxODU4MjU3NTI5MDAyMzEmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU2OTUxMDc2NyZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ=="
    };
    this.publisher = null;
    this.subscriber = null;
  }
  componentDidMount() {
    this.initializeSession();
  }

  initializeSession = () => {
    var session = OT.initSession(this.state.apiKey, this.state.sessionId);

    // Subscribe to a newly created stream
    session.on("streamCreated", (event: any) => {
      this.subscriber = session.subscribe(
        event.stream,
        "subscriber",
        {
          width: "100%",
          height: "100%"
        },
        this.handleError
      );
    });

    // Create a publisher
    this.publisher = OT.initPublisher(
      "publisher",
      {
        width: "100%",
        height: "100%"
      },
      this.handleError
    );

    // Connect to the session
    session.connect(this.state.token, (error: Error) => {
      // If the connection is successful, initialize a publisher and publish to the session
      if (error) {
        this.handleError(error);
      } else {
        session.publish(this.publisher, this.handleError);
      }
    });
  };

  handleError = (error: Error) => {
    if (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <div className="h-100 mr-3 ml-4 d-flex flex-column">
        <div className="videoChats mb-auto w-100 my-3 mx-auto h-auto shadow">
          <div
            id="subscriber"
            className="d-flex align-items-center justify-content-center"
          >
            <div className="spinner-border text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <div className="font-weight-bold d-flex align-items-center px-2">
            <div
              className="spinner-grow text-success mr-2"
              role="status"
              style={{ height: 15, width: 15 }}
            >
              <span className="sr-only">Loading...</span>
            </div>
            {/* <svg height="10" width="10" className="mr-2">
              <circle cx="5" cy="5" r="5" fill="green" />
            </svg> */}
            Peer
          </div>
        </div>
        <div className="videoChats w-100 my-3 mx-auto h-auto shadow">
          <div
            id="publisher"
            className="d-flex align-items-center justify-content-center"
          >
            <div className="spinner-border text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <div className="font-weight-bold d-flex align-items-center px-2">
            <div
              className="spinner-grow text-success mr-2"
              role="status"
              style={{ height: 15, width: 15 }}
            >
              <span className="sr-only">Loading...</span>
            </div>
            {/* <svg height="10" width="10" className="mr-2">
              <circle cx="5" cy="5" r="5" fill="green" />
            </svg> */}
            You
          </div>
        </div>
      </div>
    );
  }
}
export default VideoChat;
