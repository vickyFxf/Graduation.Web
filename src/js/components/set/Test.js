import React from 'react';
import reqwest from 'reqwest';

export default class Demo extends React.Component {
  render() {
    return (
      <div>
          {/* <form encType='multipart/form-data' action="http://localhost:3000/Upload-Module/Upload" method="post" target="hidden-iframe">
            <input type="file" name="myfile" onchange="uploadImage()"></input>
            <input type="submit" value="提交"></input>
          </form>
          {/* <iframe name="hidden-iframe" style={{display: block; width: 150px;height: 50px;overflow: hidden; background-color: pink"></iframe> */}
          {/* <iframe name="hidden-iframe" style={{display:'block',width:'150px',height:'150px',overflow:'hidden',backgroundColor:'pink'}}></iframe> */} */}
      </div>
    );
  }
}
