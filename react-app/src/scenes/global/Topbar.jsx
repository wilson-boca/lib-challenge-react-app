import {Box, colors, IconButton, useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material";
import {DarkModeOutlined, LightModeOutlined} from "@mui/icons-material"
import { Image } from 'mui-image'
import Logo from "../../assets/digitalist.png";
import { useLocation } from 'react-router-dom';

const Topbar = ({ navigation }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const location = useLocation();
    const dynamic = location.pathname === "/" ? "Vendas" : "Comissão"
    // const currentRoutes = this.context.router.getCurrentRoutes();
    // const lastRoute = currentRoutes[currentRoutes.length - 1];
    // console.log(lastRoute.name);

    return <Box display="flex" justifyContent="space-between" backgroundColor={colors.primary[400]}>
        <Box>
        <Image alt="The image" src={Logo} width={200} />
        </Box>
        <Box
        borderRadius="3px">
            <h1 sx={{ ml:2, flex:1}}>{dynamic}</h1>
        </Box>
        <Box display="flex">
            <IconButton onClick={colorMode.toogleColorMode}>
                {theme.palette.mode === 'dark' ? (
                    <LightModeOutlined/>
                ) : (
                    <DarkModeOutlined/>
                )
                }
            </IconButton>
        </Box>
    </Box>
}

export default Topbar;