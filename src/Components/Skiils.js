import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import '../styles/Skiils.css'

const skillsdata = [
    {
        skillname: 'C++',
        skillmatter: '3.5'
    },
    {
        skillname: 'React JS',
        skillmatter: '3.5'
    },
    {
        skillname: 'React Native',
        skillmatter: '4'
    },
    {
        skillname: 'Figma',
        skillmatter: '4'
    },
    {
        skillname: 'JavaScript',
        skillmatter: '3'
    },
    {
        skillname: 'Python',
        skillmatter: '3'
    },
    {
        skillname: 'Github',
        skillmatter: '3.5'
    },
    {
        skillname: 'Sql',
        skillmatter: '5'
    },
];
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='skills'>
            <p className='skills_heading'>Skills</p>
            {skillsdata.map((skill, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}

                >
                    <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                        <Typography>{skill.skillname}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box
                            sx={{
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Rating
                                name="text-feedback"
                                value={skill.skillmatter}
                                readOnly
                                precision={0.5}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            <Box sx={{ ml: 2 }}>{labels[skill.skillmatter]}</Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
