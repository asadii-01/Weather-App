import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import LightModeIcon from "@mui/icons-material/LightMode";
import CloudIcon from "@mui/icons-material/Cloud";
import "./InfoBox.css";

export default function WeatherInfo({ info }) {
  let clearSky_URL =
    "https://images.unsplash.com/photo-1617141870851-3e8c8c172595?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsZWFyJTIwc2t5fGVufDB8fDB8fHww";
  let hot_URL =
    "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let cold_URL =
    "https://plus.unsplash.com/premium_photo-1663090593977-9923cc536f3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c25vd3xlbnwwfHwwfHx8MA%3D%3D";
  let cloudy_URL =
    "https://images.unsplash.com/photo-1718917911088-23f5d4b0bacc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let rainy_URL =
    "https://plus.unsplash.com/premium_photo-1666726664307-707a74015ca4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <div className="CardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? rainy_URL
                : info.weather == "clear sky"
                ? clearSky_URL
                : info.weather == "cloudy"
                ? cloudy_URL
                : info.temp > 15
                ? hot_URL
                : cold_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <WaterDropIcon />
              ) : info.weather == "clear sky" ? (
                <LightModeIcon />
              ) : info.weather == "cloudy" ? (
                <CloudIcon />
              ) : info.temp > 15 ? (
                <LightModeIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Humidity: {info.humidity}</p>
              <p>Minimum Temperature: {info.tempMax}&deg;C</p>
              <p>Maximum Temperature: {info.tempMin}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
