import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1603115006016'); /* IE9 */
  src: url('./iconfont.eot?t=1603115006016#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1603115006016') format('woff'),
  url('./iconfont.ttf?t=1603115006016') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1603115006016#iconfont') format('svg'); /* iOS 4.1- */
}

.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

