import { Home, PhoneAndroid, PostAdd } from "@mui/icons-material"
import { List, ListItem, ListItemIcon, ListItemText, ListItemButton, Box } from "@mui/material"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <Box sx={{width: '100%', bgcolor: '#d2d2d2' }}>
    <nav>
      <List>
        <ListItem disablePadding>
          <ListItemIcon>
            <Home/>
          </ListItemIcon>
          <ListItemButton component="a" href="/">
            <ListItemText primary="Home"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <PostAdd/>
          </ListItemIcon>
          <ListItemButton component="a" href="/blogs">
            <ListItemText primary="Blogs"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <PhoneAndroid/>
          </ListItemIcon>
          <ListItemButton component="a" href="/contact">
            <ListItemText primary="Contact Me"/>
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
    <Outlet/>
    </Box>
  )
}
