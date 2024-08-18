import qr_image from "../assets/images/image-qr-code.png";

type QrCodeComponentProps = {
  title: string;
  description: string;
};

const QrCodeComponent: React.FC<QrCodeComponentProps> = ({
  title,
  description,
}) => {
  return (
    <div className="qr_wrapper">
      <img src={qr_image} alt="qr_image" className="qr_image" />
      <h1 className="qr_heading">{title}</h1>
      <p className="qr_description">{description}</p>
    </div>
  );
};

export default QrCodeComponent;
