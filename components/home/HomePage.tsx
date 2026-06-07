"use client";

import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import PhotoLibraryRoundedIcon from "@mui/icons-material/PhotoLibraryRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import GallerySection from "./GallerySection";

const highlights = [
  "Convent-led care rooted in dignity, prayer, and respect",
  "Peaceful rooms, gardens, companionship, and daily support",
  "A reassuring place for families seeking loving elder care",
];

const pillars = [
  {
    icon: HomeRoundedIcon,
    title: "A home with quiet dignity",
    description:
      "Pushpasadan offers elders a calm residential setting where the day moves gently, the surroundings feel familiar, and every person is treated with respect.",
  },
  {
    icon: HealthAndSafetyRoundedIcon,
    title: "Care for everyday needs",
    description:
      "From meals and personal assistance to attentive supervision, the sisters and care community help residents feel safe, noticed, and supported.",
  },
  {
    icon: VolunteerActivismRoundedIcon,
    title: "Faith, service, and belonging",
    description:
      "Prayer, kindness, shared time, and service shape the atmosphere here, helping elders experience companionship instead of isolation.",
  },
];

const experiencePoints = [
  {
    eyebrow: "Daily care",
    title: "Gentle support through ordinary routines",
    text: "Residents are cared for through regular meals, rest, hygiene support, prayer, conversation, and a steady rhythm that brings comfort to each day.",
  },
  {
    eyebrow: "Family trust",
    title: "A setting families can understand and trust",
    text: "Real people, open spaces, and visible community life help families feel confident that their loved ones are entering a caring and respectful home.",
  },
  {
    eyebrow: "Community",
    title: "A life enriched by visitors and fellowship",
    text: "The home welcomes moments of connection with sisters, volunteers, guests, and well-wishers so residents remain part of a wider circle of love.",
  },
];

const stats = [
  { value: "24/7", label: "caring presence and supervision" },
  { value: "Peace", label: "prayerful convent atmosphere" },
  { value: "Care", label: "meals, companionship, and daily support" },
];

const faqs = [
  {
    question: "What kind of care does Pushpasadan Old Age Home provide?",
    answer:
      "Pushpasadan provides residential elder care in a convent-led setting, with daily support, meals, companionship, prayerful presence, and a peaceful environment for senior residents.",
  },
  {
    question: "Is the home suitable for elders who need companionship?",
    answer:
      "Yes. The home is shaped around belonging, shared routines, visits, prayer, and community life so elders are not left to feel alone.",
  },
];

const contact = {
  address: "Carmel Oasis, Wanjale, Raigad dt.",
  phoneLabel: "+91 8766480884",
  phoneHref: "tel:+918766480884",
  person: "Sr. Anishya",
  mapsEmbed:
    "https://www.google.com/maps?q=Carmel%20Oasis%2C%20Wanjale%2C%20Raigad&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Carmel%20Oasis%2C%20Wanjale%2C%20Raigad",
};

const fadeUp = (reducedMotion: boolean) => ({
  initial: { opacity: 0, y: reducedMotion ? 0 : 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: reducedMotion ? 0 : 0.75, ease: "easeOut" as const },
});

const HomePage = () => {
  const prefersReducedMotion = useReducedMotion();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(Boolean(prefersReducedMotion));
  }, [prefersReducedMotion]);

  return (
    <LazyMotion features={domAnimation}>
      <Box
        component="main"
        sx={{
          overflow: "hidden",
          background:
            "radial-gradient(circle at top left, rgba(93, 150, 152, 0.20), transparent 26%), radial-gradient(circle at right, rgba(111, 160, 107, 0.14), transparent 22%), linear-gradient(180deg, #EEF8F5 0%, #FFFDF8 48%, #EAF4EE 100%)",
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            isolation: "isolate",
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              borderRadius: "50%",
              filter: "blur(40px)",
              zIndex: -1,
            },
            "&::before": {
              top: 48,
              right: -120,
              width: 340,
              height: 340,
              background: "rgba(47, 111, 115, 0.13)",
            },
            "&::after": {
              bottom: 120,
              left: -120,
              width: 320,
              height: 320,
              background: "rgba(111, 160, 107, 0.18)",
            },
          }}
        >
          <Container
            maxWidth="xl"
            sx={{ pt: { xs: 6, md: 3 }, pb: { xs: 8, md: 12 } }}
          >
            <Grid
              container
              spacing={{ xs: 5, md: 2 }}
              sx={{ alignItems: "center" }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <m.div {...fadeUp(reducedMotion)}>
                  <Stack spacing={3}>
                    <Chip
                      label="Pushpasadan Old Age Home"
                      sx={{
                        alignSelf: "flex-start",
                        bgcolor: "rgba(47, 111, 115, 0.11)",
                        color: "primary.dark",
                      }}
                    />
                    <Typography variant="h1">
                      A peaceful old age home where elders are cared for with
                      dignity, prayer, and love.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ maxWidth: 640, color: "text.secondary" }}
                    >
                      Carmel Oasis at Pushpasadan is a convent-led home for
                      senior residents, offering a calm place to live, gentle
                      daily support, companionship, and the reassurance of a
                      caring community.
                    </Typography>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                      <Button
                        component={Link}
                        href="/#gallery"
                        variant="contained"
                        endIcon={<KeyboardArrowRightRoundedIcon />}
                      >
                        Explore the Home
                      </Button>
                      <Button
                        component={Link}
                        href="/#contact"
                        variant="outlined"
                        color="primary"
                      >
                        Make an Enquiry
                      </Button>
                    </Stack>
                    <Stack spacing={1.5}>
                      {highlights.map((item) => (
                        <Stack
                          key={item}
                          direction="row"
                          spacing={1.5}
                          sx={{ alignItems: "center" }}
                        >
                          <FavoriteRoundedIcon
                            color="primary"
                            fontSize="small"
                          />
                          <Typography variant="body2">{item}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </m.div>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <m.div {...fadeUp(reducedMotion)}>
                  <Box
                    sx={{
                      position: "relative",
                      minHeight: { xs: 460, md: 620 },
                      width: "100%",
                    }}
                  >
                    <Card
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        minHeight: { xs: 420, md: 560 },
                        borderRadius: 2,
                        boxShadow: "0 30px 80px rgba(31, 63, 61, 0.18)",
                      }}
                    >
                      <Box sx={{ position: "absolute", inset: 0 }}>
                        <Image
                          src="/photos/carmel-oasis-exterior.jpg"
                          alt="Front view of Carmel Oasis surrounded by landscaped paths and palm trees."
                          fill
                          preload
                          sizes="(max-width: 900px) 100vw, 50vw"
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(180deg, rgba(32,24,17,0.04) 0%, rgba(32,24,17,0.68) 100%)",
                        }}
                      />
                      <Stack
                        spacing={2}
                        sx={{
                          position: "relative",
                          zIndex: 1,
                          height: "100%",
                          justifyContent: "space-between",
                          p: { xs: 2.5, md: 3.5 },
                          color: "common.white",
                        }}
                      >
                        <Stack
                          direction="row"
                          sx={{ justifyContent: "space-between" }}
                        >
                          <Chip
                            label="Peaceful convent campus"
                            sx={{
                              bgcolor: "rgba(255,255,255,0.14)",
                              color: "common.white",
                            }}
                          />
                          <Avatar sx={{ bgcolor: "rgba(255,255,255,0.16)" }}>
                            <PhotoLibraryRoundedIcon />
                          </Avatar>
                        </Stack>
                        <Stack spacing={2}>
                          <Typography variant="h3" sx={{ color: "inherit" }}>
                            A quiet place to feel safe, seen, and at home.
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "rgba(255,255,255,0.82)",
                              maxWidth: 420,
                            }}
                          >
                            The building, the sisters, the garden, and the
                            community together create a gentle atmosphere for
                            elders who deserve care with patience and respect.
                          </Typography>
                        </Stack>
                      </Stack>
                    </Card>

                    <Card
                      sx={{
                        position: "absolute",
                        right: { xs: 16, md: -20 },
                        bottom: { xs: -8, md: 24 },
                        width: { xs: "72%", sm: 320, md: 340 },
                        overflow: "hidden",
                        borderRadius: 1,
                        border: "1px solid rgba(255,255,255,0.7)",
                        backdropFilter: "blur(16px)",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          height: { xs: 180, md: 220 },
                        }}
                      >
                        <Image
                          src="/photos/sisters-front.jpg"
                          alt="The sisters standing together in front of the Carmel Oasis entrance."
                          fill
                          sizes="(max-width: 900px) 72vw, 340px"
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                    </Card>
                  </Box>
                </m.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container sx={{ pb: { xs: 7, md: 10 } }}>
          <m.div {...fadeUp(reducedMotion)}>
            <Card
              sx={{
                bgcolor: "rgba(255,255,255,0.76)",
                border: "1px solid rgba(47, 111, 115, 0.10)",
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                <Grid container spacing={2}>
                  {stats.map((stat) => (
                    <Grid key={stat.label} size={{ xs: 12, sm: 4 }}>
                      <Box
                        sx={{
                          borderRadius: 4,
                          px: 2,
                          py: 2.5,
                          bgcolor: "rgba(230, 177, 126, 0.16)",
                          textAlign: { xs: "left", sm: "center" },
                        }}
                      >
                        <Typography variant="h3" color="primary.main">
                          {stat.value}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </m.div>
        </Container>

        <Container sx={{ py: { xs: 7, md: 10 } }} id="about">
          <m.div {...fadeUp(reducedMotion)}>
            <Stack spacing={2} sx={{ mb: 5, maxWidth: 760 }}>
              <Typography
                variant="overline"
                sx={{ color: "primary.main", letterSpacing: "0.12em" }}
              >
                About Carmel Oasis
              </Typography>
              <Typography variant="h2">
                A convent-led home shaped by compassion and service.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Carmel Oasis at Pushpasadan Old Age Home is a place where senior
                residents can live with peace, routine, prayer, and personal
                attention. The home is guided by the sisters and supported by a
                community that believes every elder deserves dignity,
                companionship, and tenderness.
              </Typography>
            </Stack>
          </m.div>

          <Grid container spacing={3}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <Grid key={title} size={{ xs: 12, md: 4 }}>
                <m.div {...fadeUp(reducedMotion)}>
                  <Card
                    sx={{ height: "100%", bgcolor: "rgba(255,255,255,0.84)" }}
                  >
                    <CardContent sx={{ p: 3.5 }}>
                      <Stack spacing={2}>
                        <Avatar
                          sx={{
                            width: 56,
                            height: 56,
                            bgcolor: "rgba(47, 111, 115, 0.12)",
                            color: "primary.main",
                          }}
                        >
                          <Icon />
                        </Avatar>
                        <Typography variant="h3">{title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {description}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Box sx={{ bgcolor: "rgba(255,255,255,0.56)" }} id="services">
          <Container sx={{ py: { xs: 7, md: 10 } }}>
            <Grid container spacing={{ xs: 4, md: 5 }}>
              <Grid size={{ xs: 12, md: 5 }}>
                <m.div {...fadeUp(reducedMotion)}>
                  <Stack spacing={2.5}>
                    <Typography
                      variant="overline"
                      sx={{ color: "primary.main", letterSpacing: "0.12em" }}
                    >
                      Care and daily life
                    </Typography>
                    <Typography variant="h2">
                      Meaningful care is found in the small things repeated
                      every day.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      A good old age home is not only about buildings. It is
                      about meals served with care, someone present when help is
                      needed, peaceful surroundings, prayer, conversation, and
                      the comfort of being remembered.
                    </Typography>
                  </Stack>
                </m.div>
              </Grid>

              <Grid size={{ xs: 12, md: 7 }}>
                <Stack spacing={2.5}>
                  {experiencePoints.map((item) => (
                    <m.div key={item.title} {...fadeUp(reducedMotion)}>
                      <Card>
                        <CardContent sx={{ p: 3.5 }}>
                          <Stack spacing={1.2}>
                            <Typography
                              variant="overline"
                              sx={{
                                color: "primary.main",
                                letterSpacing: "0.12em",
                              }}
                            >
                              {item.eyebrow}
                            </Typography>
                            <Typography variant="h3">{item.title}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.text}
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Card>
                    </m.div>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <GallerySection />

        <Box sx={{ bgcolor: "rgba(255,255,255,0.56)" }}>
          <Container sx={{ py: { xs: 5, md: 9 } }}>
            <m.div {...fadeUp(reducedMotion)}>
              <Stack
                spacing={{ xs: 1.25, md: 2 }}
                sx={{ mb: { xs: 2.5, md: 4 }, maxWidth: 760 }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "primary.main",
                    fontSize: { xs: "0.72rem", md: "0.78rem" },
                    letterSpacing: "0.08em",
                  }}
                >
                  Questions families ask
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.8rem", md: "3.2rem" },
                    lineHeight: 1.08,
                  }}
                >
                  Clear answers for families, visitors, and well-wishers.
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    lineHeight: 1.65,
                  }}
                >
                  Choosing an old age home is an emotional decision. These
                  answers help families understand the care, atmosphere, and
                  ways to connect with the mission.
                </Typography>
              </Stack>
            </m.div>

            <Stack spacing={{ xs: 1.2, md: 1.6 }}>
              {faqs.map((item) => (
                <m.div key={item.question} {...fadeUp(reducedMotion)}>
                  <Accordion
                    disableGutters
                    sx={{
                      bgcolor: "rgba(255,255,255,0.88)",
                      border: "1px solid rgba(47, 111, 115, 0.1)",
                      borderRadius: {
                        xs: "14px !important",
                        md: "18px !important",
                      },
                      boxShadow: "0 12px 32px rgba(31, 63, 61, 0.06)",
                      "&::before": { display: "none" },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreRoundedIcon />}
                      sx={{
                        minHeight: { xs: 52, md: 60 },
                        px: { xs: 1.75, md: 2.25 },
                        py: { xs: 0.5, md: 0.75 },
                        "&.Mui-expanded": { minHeight: { xs: 52, md: 60 } },
                        "& .MuiAccordionSummary-content": {
                          my: { xs: 0.75, md: 1 },
                          pr: 1,
                        },
                        "& .MuiAccordionSummary-content.Mui-expanded": {
                          my: { xs: 0.75, md: 1 },
                        },
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: { xs: "0.98rem", md: "1.12rem" },
                          lineHeight: 1.35,
                        }}
                      >
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        px: { xs: 1.75, md: 2.25 },
                        pt: 0,
                        pb: { xs: 1.75, md: 2.25 },
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: "0.9rem", md: "0.96rem" },
                          lineHeight: 1.65,
                        }}
                      >
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </m.div>
              ))}
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: { xs: 5.5, md: 10 } }} id="contact">
          <m.div {...fadeUp(reducedMotion)}>
            <Card
              sx={{
                overflow: "hidden",
                background:
                  "radial-gradient(circle at top left, rgba(93,150,152,0.18), transparent 34%), linear-gradient(135deg, #F9FEFB 0%, #EEF8F5 55%, #F7F2EA 100%)",
                border: "1px solid rgba(47, 111, 115, 0.12)",
                borderRadius: { xs: 3, md: 4 },
                boxShadow: {
                  xs: "0 18px 48px rgba(31, 63, 61, 0.09)",
                  md: "0 30px 90px rgba(31, 63, 61, 0.12)",
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 2.5, md: 4 } }}>
                <Grid
                  container
                  spacing={{ xs: 2.5, md: 4 }}
                  sx={{ alignItems: "center" }}
                >
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Stack spacing={{ xs: 1.35, md: 2 }}>
                      <Chip
                        label="Contact and directions"
                        sx={{
                          alignSelf: "flex-start",
                          bgcolor: "rgba(47, 111, 115, 0.1)",
                          color: "primary.dark",
                          height: { xs: 28, md: 32 },
                          fontSize: { xs: "0.76rem", md: "0.82rem" },
                        }}
                      />
                      <Typography
                        variant="h2"
                        sx={{
                          color: "primary.dark",
                          fontSize: {
                            xs: "1.85rem",
                            sm: "2.2rem",
                            md: "3.3rem",
                          },
                          lineHeight: { xs: 1.08, md: 1 },
                        }}
                      >
                        Looking for a caring old age home for someone you love?
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Stack spacing={1}>
                      <Chip
                        icon={<AccessTimeRoundedIcon />}
                        label="Resident care enquiries"
                        sx={{
                          bgcolor: "rgba(47, 111, 115, 0.1)",
                          color: "primary.dark",
                          justifyContent: "flex-start",
                          minHeight: { xs: 32, md: 36 },
                          "& .MuiChip-label": { whiteSpace: "normal" },
                        }}
                      />
                      <Chip
                        icon={<PhotoLibraryRoundedIcon />}
                        label="Family visits and fellowship"
                        sx={{
                          bgcolor: "rgba(111, 160, 107, 0.12)",
                          color: "primary.dark",
                          justifyContent: "flex-start",
                          minHeight: { xs: 32, md: 36 },
                          "& .MuiChip-label": { whiteSpace: "normal" },
                        }}
                      />
                      <Chip
                        icon={<PlaceRoundedIcon />}
                        label="Volunteering and support"
                        sx={{
                          bgcolor: "rgba(230, 177, 126, 0.18)",
                          color: "primary.dark",
                          justifyContent: "flex-start",
                          minHeight: { xs: 32, md: 36 },
                          "& .MuiChip-label": { whiteSpace: "normal" },
                        }}
                      />
                    </Stack>
                  </Grid>
                </Grid>

                <Divider
                  sx={{
                    my: { xs: 2, md: 3 },
                    borderColor: "rgba(47, 111, 115, 0.12)",
                  }}
                />

                <Grid container spacing={{ xs: 1.5, md: 3 }}>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <Stack spacing={{ xs: 0.75, md: 1 }}>
                      {/* Address */}
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ alignItems: "center", px: 0.5 }}
                      >
                        <PlaceRoundedIcon
                          sx={{
                            color: "primary.main",
                            fontSize: 17,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ color: "text.primary", lineHeight: 1.4 }}
                        >
                          {contact.address}
                        </Typography>
                      </Stack>

                      {/* Divider */}
                      <Divider
                        sx={{ borderColor: "rgba(47, 111, 115, 0.10)" }}
                      />

                      {/* Phone */}
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ alignItems: "center", px: 0.5 }}
                      >
                        <LocalPhoneRoundedIcon
                          sx={{
                            color: "primary.main",
                            fontSize: 17,
                            flexShrink: 0,
                          }}
                        />
                        <Box>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "text.secondary",
                              display: "block",
                              lineHeight: 1.2,
                            }}
                          >
                            {contact.person}
                          </Typography>
                          <Typography
                            component="a"
                            href={contact.phoneHref}
                            sx={{
                              color: "primary.dark",
                              textDecoration: "none",
                              fontSize: { xs: "0.95rem", md: "1.05rem" },
                              fontWeight: 700,
                              lineHeight: 1.2,
                            }}
                          >
                            {contact.phoneLabel}
                          </Typography>
                        </Box>
                      </Stack>

                      {/* Buttons */}
                      <Stack direction="row" spacing={1} sx={{ pt: 0.5 }}>
                        <Button
                          component="a"
                          href={contact.phoneHref}
                          variant="contained"
                          size="small"
                          sx={{ flex: 1, minHeight: 38 }}
                        >
                          Call Sr. Anishya
                        </Button>
                        <Button
                          component="a"
                          href={contact.mapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outlined"
                          size="small"
                          sx={{
                            flex: 1,
                            minHeight: 38,
                            color: "primary.dark",
                            borderColor: "rgba(47, 111, 115, 0.28)",
                            bgcolor: "rgba(255,255,255,0.45)",
                          }}
                        >
                          Open Maps
                        </Button>
                      </Stack>
                    </Stack>
                  </Grid>

                  <Grid size={{ xs: 12, md: 7 }}>
                    <Box
                      sx={{
                        overflow: "hidden",
                        borderRadius: { xs: 2, md: 3 },
                        border: "1px solid rgba(47, 111, 115, 0.14)",
                        bgcolor: "rgba(255,255,255,0.86)",
                        boxShadow: "0 18px 50px rgba(31, 63, 61, 0.09)",
                        minHeight: { xs: 240, sm: 300, md: 360 },
                      }}
                    >
                      <Box
                        component="iframe"
                        title="Google map showing Carmel Oasis, Wanjale, Raigad"
                        src={contact.mapsEmbed}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        sx={{
                          display: "block",
                          width: "100%",
                          height: { xs: 240, sm: 300, md: 360 },
                          border: 0,
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </m.div>
        </Container>
      </Box>
    </LazyMotion>
  );
};

export default HomePage;
