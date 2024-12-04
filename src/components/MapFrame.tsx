import { AspectRatio } from "@mantine/core";
import { StyledContainer } from "@components/StyledContainer";
import { companyInfo } from "@constants/CompanyInfo";

const MapFrame: React.FC = () => {
  return (
    <StyledContainer>
      <AspectRatio ratio={16 / 9}>
        <iframe
          src={companyInfo.mapLocation}
          title="Google map"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </AspectRatio>
    </StyledContainer>
  );
};

export default MapFrame;
