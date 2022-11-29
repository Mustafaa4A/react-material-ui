import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const NightmodeSection = () => {
  return (
    <div style={{margin:'20px 0'}}>
      <Grid container spacing={1}>
        <Grid xs={2} sx={{textAlign:'center'}}>
          <DarkModeIcon sx={{ fontSize: '50px' }} />
          <h3 style={{margin:'5px'}}>Night Mode</h3>
        </Grid>
        <Grid xs={10}>
          <Card sx={{backgroundColor:'white'}}>
            <CardContent>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="light"
                name="radio-buttons-group"
              >
                <FormControlLabel value="dark" control={<Radio />}  />
                <FormControlLabel value="light" control={<Radio />} />
              </RadioGroup>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default NightmodeSection;