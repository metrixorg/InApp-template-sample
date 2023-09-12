import { Bridge } from './models';

export class Utils {
  static addCloseButton(bridge: Bridge) {
    window.onload = () => {
      const closeButtonContainerElement = document.createElement('div');
      closeButtonContainerElement.style.position = 'fixed';
      closeButtonContainerElement.style.top = '0.5rem';
      closeButtonContainerElement.style.right = '0.5rem';

      closeButtonContainerElement.onclick = () => bridge.close();
      closeButtonContainerElement.innerHTML = CLOSE_BUTTON_SVG;

      document.body.appendChild(closeButtonContainerElement);
    };
  }
}

const CLOSE_BUTTON_SVG = `
<svg
      width=" 24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2018_8399)">
        <path
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          fill="#666"
        />
      </g>
      <defs>
        <clipPath id="clip0_2018_8399"><rect width="24" height="24" fill="white" /></clipPath>
      </defs>
    </svg>
`;
