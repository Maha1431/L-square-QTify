import { Tabs, Tab } from '@mui/material';
import  Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "../Components/filter.module.css"
import React from 'react'


function TabPanel(props)
{
  const { children, value, index,  ...other} = props;
  return(
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tab-${index}`}
        aria-labelledby = {`simple-tab-${index}`}
        {...other}
        >
            {value  === index && (
                <Box sx={{ p : 3 }}> 
                <Typography>{children}</Typography></Box>
            )}
    </div>
  );
}

function Filters({filters, selectFilteridx, setSelectFilteridx})
{
    // const [value, setValue] = useState(0);
  const handleChange =(event, newvalue) => {
    console.log("selectfilteridx:", newvalue);
    setSelectFilteridx(newvalue);
  }

function allyprops(index)
{
  return{
    id:`simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

return(
    <div>
        <Tabs
        value={selectFilteridx} 
        onChange={handleChange}
        aria-label='basic tabs example'
        TabIndicatorProps={{
            style:{
                backgroundColor: "var(--color-primary)"
            },
        }}
        >
            {filters.map((ele, idx) => (
                <Tab className={styles.tab} label={ele.label} {...allyprops(idx)} />
            ))}

        </Tabs>
        {filters.map((ele, idx) => (
                <TabPanel  value={ele.label} index={idx} />
            ))}
    </div>


);
       
}

export default Filters;