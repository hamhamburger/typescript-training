import { Grid, Box, Paper, Select, Typography } from '@mui/material';
import BasicSelect from './BasicSelect';

const Item = ({children}:{children:JSX.Element | string}):JSX.Element => {
  
  return (
    <Paper>{children}</Paper>
  )
}

const Main = ():JSX.Element => {
  
  return (
    <Box>
      <Grid container columnGap={2} rowGap={3}>
        <Grid item xs={3}>
          <BasicSelect />
          <BasicSelect />
        </Grid>
        <Grid item xs={3}>
          <BasicSelect />
          <BasicSelect />
        </Grid>
        <Grid item xs>
          <BasicSelect />
          <BasicSelect />
        </Grid>
        <Grid item xs={2}>
          <BasicSelect />
          <Item>Test</Item>
          <Item>LonfText..................................</Item>
        </Grid>
        <Grid item xs>
          <BasicSelect />
        </Grid>
      </Grid>
      <Box sx={{margin:"30px"}} />


      <Paper sx={{
        margin:"auto",
        maxWidth:"500px",
        flexGrow:1,
        border:"3px solid black"
      }}
      >
        <Grid container spacing={2} >
          <Grid item>
            <Box sx={{width:"128px",height:"128px",backgroundColor:"black"}}>w</Box>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs={12} container direction="column">
              <Typography variant='subtitle1' component="div">
                License
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Grid container gap={1}>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  Remove
                </Typography>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  Edit
                </Typography>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  Save
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{margin:"10px"}}>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>

          </Grid>

        </Grid>
      </Paper>
    </Box>
  )
}
export default Main