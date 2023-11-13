import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedIn from '@mui/icons-material/LinkedIn'
import Twitter from '@mui/icons-material/Twitter'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Paper
} from '@mui/material';
import Container from '@mui/material/Container';
import { red } from '@mui/material/colors';


function App() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("Web Developer");

  const skills = [
    { name: 'C', proficiency: 75 }, // 80% proficient
    { name: 'C++', proficiency: 70 }, // 80% proficient
    { name: 'Java', proficiency: 90 }, // 80% proficient
    { name: 'JavaScript', proficiency: 85 }, // 90% proficient
    { name: 'ReactJs', proficiency: 80 }, // 90% proficient
    { name: 'NodeJs', proficiency: 85 }, // 90% proficient
    { name: 'ExpressJs', proficiency: 85 }, // 90% proficient
    { name: 'Material-ui', proficiency: 75 }, // 90% proficient
    { name: 'SpringBoot', proficiency: 80 }, // 90% proficient
    { name: 'MongoDB', proficiency: 80 }, // 90% proficient
    { name: 'MySql', proficiency: 80 }, // 90% proficient
    
  ];

 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
       <Box display="flex" 
     justifyContent="left" 
     sx={{backgroundColor:"error.light", padding :2}}>
          <Avatar
              src="/static/images/avatar/myimage.jpeg"
               sx={{ width: 56, height: 56 }}
          />
          <Typography
            variant="h4"
           sx={{fontWeight: 'bold',paddingLeft:2, color:'white',marginTop:1}}
           fontFamily='inherit'         >
            Gaurav Raskar
          </Typography>
          <Button variant="text" 
           sx={{color:"white",paddingLeft:80,fontFamily:'serif',
           fontStyle:'oblique',fontSize:17}}
           onClick={()=>{
           
           }}
            >
              Home</Button>
          <Button variant="text" sx={{color:"white",paddingLeft:2,
          fontFamily:'serif',fontStyle:'oblique',fontSize:17}}
          onClick={()=>{
            alert("Contact Button Clicked")
          }}
          >
            Contact</Button>
          <Button 
          variant="text" 
          sx={{color:"white",paddingLeft:2,
          fontFamily:'serif',fontStyle:'oblique',fontSize:17}}
          onClick={handleClickOpen}
          >About</Button>
           <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Some More Information About Me !!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          My journey began when I stumbled upon my first HTML code at the age of 17 and was immediately captivated. Since then, I have had the privilege to collaborate with diverse teams, ranging from startups to established brands. My work is blend of creativity and functionality. I believe in building websites are not only aesthetically pleasing but also optimized for performance and accessibility.
                     Technically, I am proficient in HTML, CSS, JavaScript, React,Node.js, Express.js,Material-Ui,MongoDb,Mysql,Java,Spring,SpringBoot etc... Continuous learning drives me. When I'm not coding or pushing pixels, you can find me exploring hiking trails.
              Whether you're a brand looking to enhance your online presence, a startup  in need of a digital face, or an individual with an idea, I'm here to help  bring your vision to life. Let's create something beautiful together..!!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handleClose} autoFocus>
           Acknowledged...
          </Button>
        </DialogActions>
      </Dialog>
        </Box>
       
      <Grid container justifyContent='center'>
        <Grid item >
            <Box     sx={{
        width: 600,
        height: 500,
        backgroundColor: 'white',
        margin:1,
      
      }}>
        <Typography
            variant="h3"
           sx={{fontWeight: 'bold',paddingLeft:1, color:'black',marginTop:20}}
           fontFamily='cursive'
          >          
          Hello, I'm GauRav
          </Typography>
          <Typography
            variant="h6"
           sx={{fontWeight: 'normal',paddingLeft:1, color:'black',padding:1}}
          >          
          A passionate <span style={{color:"red",fontWeight:"bold"}}>{name}</span>  based in Pune. With over 2 years of experience in crafting
           responsive, user-friendly, and innovative websites, I've always been drawn to the 
           intricate art of turning code into captivating user experiences.
          </Typography>
          <Button variant="contained" color='secondary'
          sx={{marginLeft:15,marginTop:2,fontFamily:'cursive'}}>Hire Me</Button>
          <Button 
          variant="contained" 
          color='secondary'
          sx={{marginLeft:1,marginTop:2,fontFamily:'cursive'}}
          href = "/static/myresume/Gaurav_Raskar_CV.pdf"
          download
          >Get Resume</Button> <br/>
          <Twitter
            color='primary'
            fontSize='large'
            sx={{marginLeft:15,marginTop:5}}
            onClick={()=>{
              window.open('https://www.twitter.com/','_blank');
            }}>
          </Twitter>

          <LinkedIn
          color='primary'
           fontSize='large'
           sx={{marginLeft:3,marginTop:5}}
           onClick={()=>{
             window.open('https://www.linkedin.com/in/gaurav-raskar-678201a7/','_blank');
           }}>
          </LinkedIn>

          <FacebookIcon 
          color='primary'
          fontSize='large'
          sx={{marginLeft:3,marginTop:5}}
          onClick={()=>{
            window.open('https://www.facebook.com/profile.php?id=100001438507093','_blank');
          }}
          >
          </FacebookIcon>

          <InstagramIcon
            color='primary'
            fontSize='large'
            sx={{marginLeft:3,marginTop:5}}
            onClick={()=>{
              window.open('https://www.instagram.com/go_gaurav','_blank');
            }}>
          </InstagramIcon>
           </Box>
        </Grid>

        <Grid item >
        <Box     sx={{
        width: 600,
        height: 500,
        
        }}>
          <Avatar
          sizes='20'
          variant='square'
          src="/static/images/avatar/myimage.jpeg"
          sx={{width:450,height:450,padding:10}}
          >
          </Avatar>
       </Box>
    </Grid>
</Grid><br/>

<Container sx={{marginTop:2}}> 
<TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{backgroundColor:'GrayText'}}>
            <TableCell 
            sx={{fontFamily:'cursive',fontSize:20,fontWeight:20}}
            >
              Skills</TableCell>
            <TableCell 
            align="right"
            sx={{fontFamily:'cursive',fontSize:20,fontWeight:20}}
            >
              Proficiency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {skills.map((skill) => (
            <TableRow key={skill.name}>
              <TableCell  sx={{fontFamily:'cursive',fontSize:20,fontWeight:20}} component="th" scope="row">
                {skill.name}
              </TableCell>
              <TableCell align="right">
                <LinearProgress variant="determinate" value={skill.proficiency} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </Container>     

       

        </>
  );
}

export default App;
