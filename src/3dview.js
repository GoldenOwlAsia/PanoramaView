import React, {Component} from 'react';
import { WebView, Dimensions } from 'react-native';
const {h, w} = Dimensions.get('window');

// let HTML = `
// <!DOCTYPE HTML>
// <html>
//   <head>
//       <meta charset="utf-8">
//       <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width, shrink-to-fit=no">
//       <title>Panolens.js panorama cube</title>
//       <style>
//         body {
//           margin: 0;
//           width: 100%;
//           height: 100%;
//           overflow: hidden;
//         }
//         a:link, a:visited{
//           color: #bdc3c7;
//         }
//         .credit{
//           position: absolute;
//           text-align: center;
//           width: 100%;
//           padding: 20px 0;
//           color: #fff;
//         }
//       </style>
//     </head>
//
//     <body>
//
//       <div class="credit"><a href="https://github.com/pchen66/panolens.js">Panolens.js</a> panorama cube example. Image from <a href="http://paulbourke.net/miscellaneous/">Paul Bourke</a></div>
//
//       <script src="http://pchen66.github.io/js/three/three.min.js"></script>
//       <script src="http://pchen66.github.io/js/panolens/panolens.min.js"></script>
//
//       <script>
//         var panorama, viewer;
//         var path = 'asset/textures/cube/sand/';
//         var format = '.png';
//         panorama = new PANOLENS.CubePanorama( [
//             path + 'px' + format, path + 'nx' + format,
//             path + 'py' + format, path + 'ny' + format,
//             path + 'pz' + format, path + 'nz' + format
//         ] );
//         viewer = new PANOLENS.Viewer();
//         viewer.add( panorama );
//       </script>
//
//     </body>
// </html>
// `
//
// let jsCode = ``

export default class PanoView extends Component {
  render() {
    return (
      <WebView
        source={{url: "https://pchen66.github.io/Panolens/examples/panorama_image.html"}}
        javaScriptEnabledAndroid={true}
      />
    )
  }
}
