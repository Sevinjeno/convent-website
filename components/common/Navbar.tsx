"use client";

import { NAV_LINKS } from "@/constants/navigation";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  AppBar,
  Box,
  Button,
  ClickAwayListener,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(18px)",
        backgroundColor: "rgba(246, 251, 248, 0.82)",
        borderBottom: "1px solid rgba(47, 111, 115, 0.12)",
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ minHeight: 80 }}>
          <Typography
            component={Link}
            href="/"
            variant="h5"
            sx={{
              textDecoration: "none",
              color: "primary.dark",
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            Pushpasadan
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
            {NAV_LINKS.map((link) => (
              <Button
                key={link.name}
                component={Link}
                href={link.href}
                color="inherit"
                sx={{ color: "text.primary" }}
              >
                {link.name}
              </Button>
            ))}
          </Stack>

          <IconButton
            aria-label={open ? "close navigation" : "open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            sx={{ display: { xs: "inline-flex", md: "none" }, color: "primary.dark" }}
          >
            {open ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
          </IconButton>
        </Toolbar>
      </Container>

      {open ? (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              borderTop: "1px solid rgba(47, 111, 115, 0.12)",
              bgcolor: "rgba(246, 251, 248, 0.98)",
              boxShadow: "0 18px 42px rgba(31, 63, 61, 0.12)",
            }}
          >
            <Container sx={{ py: 2 }}>
              <Stack spacing={1}>
                {NAV_LINKS.map((link) => (
                  <Button
                    key={link.name}
                    component={Link}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    sx={{ justifyContent: "flex-start", color: "text.primary" }}
                  >
                    {link.name}
                  </Button>
                ))}
              </Stack>
            </Container>
          </Box>
        </ClickAwayListener>
      ) : null}
    </AppBar>
  );
};

export default Navbar;
