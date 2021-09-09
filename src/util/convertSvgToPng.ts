import Canvg from 'canvg';

export const convertSvgToPng = async (svgId) => {
  //pathSVG to string
  const svg = document.getElementById(`${svgId}`);
  const stringSVG = new XMLSerializer().serializeToString(svg);
  //Canvas element
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  //SVG to Canvas
  const canvg = await Canvg.fromString(ctx, stringSVG);
  canvg.start();
  //Canvas to PNG
  const data = canvas.toDataURL('image/png');
  canvg.stop();
  return data;
};
