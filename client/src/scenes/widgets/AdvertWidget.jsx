import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="advert"
                src="http://localhost:3001/assets/info4.jfif"
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
            />
            <FlexBetween>
                <Typography color={main}>Daraz Online Shopping </Typography>
                <Typography color={medium}>blog.daraz.lk</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                ඔයාලාත් උදාවන නව වසරට ගැළපෙන New Year Outfit Ideas ගැන සොයනවාද? දැන් Daraz Fashion වෙතින් හොඳම මිලට අනර්ඝ New Year Outfit Ideas තෝරගන්න.
            </Typography>
        </WidgetWrapper>
    );
};

export default AdvertWidget;