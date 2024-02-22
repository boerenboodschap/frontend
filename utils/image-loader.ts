interface Props {
  src: any;
  width: any;
  quality: any;
}

export default function myImageLoader(props: Props) {
  return `https://source.unsplash.com/random/${props.width}x${props.width}`;
}
