"use client";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";
import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  TouchEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { galleryPhotos } from "@/constants/gallery";

const INITIAL_VISIBLE_PHOTOS = 8;

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const visiblePhotos = useMemo(
    () =>
      showAll ? galleryPhotos : galleryPhotos.slice(0, INITIAL_VISIBLE_PHOTOS),
    [showAll],
  );

  const hasMorePhotos = galleryPhotos.length > INITIAL_VISIBLE_PHOTOS;

  const closeLightbox = () => setLightbox(null);

  const prev = useCallback(() => {
    setLightbox((index) =>
      index === null
        ? null
        : (index - 1 + galleryPhotos.length) % galleryPhotos.length,
    );
  }, []);

  const next = useCallback(() => {
    setLightbox((index) =>
      index === null ? null : (index + 1) % galleryPhotos.length,
    );
  }, []);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start) return;

    const touch = event.changedTouches[0];
    const diffX = touch.clientX - start.x;
    const diffY = touch.clientY - start.y;
    const isHorizontalSwipe =
      Math.abs(diffX) > 48 && Math.abs(diffX) > Math.abs(diffY) * 1.4;

    if (!isHorizontalSwipe) return;
    if (diffX < 0) next();
    else prev();
  };

  useEffect(() => {
    if (lightbox === null) return;

    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <Box
      component="section"
      id="gallery"
      sx={{
        py: { xs: 5.5, md: 8 },
        bgcolor: "#f6f1e7",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2, md: 4 }}
          sx={{
            alignItems: { xs: "flex-start", md: "flex-end" },
            justifyContent: "space-between",
            mb: { xs: 3, md: 4 },
          }}
        >
          <Stack spacing={1.1} sx={{ maxWidth: 650 }}>
            <Typography
              component="span"
              sx={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#7a6040",
              }}
            >
              Life at the home
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: { xs: "1.8rem", md: "2.45rem" },
                fontWeight: 400,
                lineHeight: 1.12,
                color: "#2a2018",
              }}
            >
              A growing gallery of the campus, sisters, visitors, and everyday
              moments.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#665846",
                fontFamily: "'Manrope', sans-serif",
                fontSize: { xs: "0.94rem", md: "1rem" },
                lineHeight: 1.65,
                maxWidth: 600,
              }}
            >
              Browse the photos as a full gallery. New photos can be added to
              the same list without changing the layout.
            </Typography>
          </Stack>

          <Chip
            icon={<CollectionsRoundedIcon />}
            label={`${galleryPhotos.length} photos`}
            sx={{
              bgcolor: "rgba(122,96,64,0.12)",
              color: "#4b3827",
              border: "1px solid rgba(122,96,64,0.16)",
              fontWeight: 700,
            }}
          />
        </Stack>

        <Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, minmax(0, 1fr))",
                sm: "repeat(3, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))",
              },
              gap: { xs: 1, sm: 1.35, md: 1.6 },
            }}
          >
            {visiblePhotos.map((photo) => {
              const photoIndex = galleryPhotos.indexOf(photo);

              return (
                <Box
                  key={photo.src}
                  sx={{
                    height: "100%",
                  }}
                >
                  <Box
                    component="button"
                    type="button"
                    onClick={() => setLightbox(photoIndex)}
                    aria-label={`Open photo: ${photo.title}`}
                    sx={{
                      appearance: "none",
                      border: 0,
                      p: 0,
                      m: 0,
                      width: "100%",
                      height: "100%",
                      minHeight: 0,
                      display: "block",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "6px",
                      cursor: "pointer",
                      bgcolor: "#e7ddcb",
                      aspectRatio: "4 / 3",
                      boxShadow: "0 10px 24px rgba(61, 43, 26, 0.09)",
                      textAlign: "left",
                      "&:hover .gallery-image": {
                        transform: "scale(1.045)",
                      },
                      "&:hover .gallery-caption": {
                        opacity: 1,
                      },
                      "&:focus-visible": {
                        outline: "3px solid #7a6040",
                        outlineOffset: 4,
                      },
                    }}
                  >
                    <Box
                      className="gallery-image"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        transition:
                          "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw"
                        style={{ objectFit: "cover" }}
                      />
                    </Box>

                    <Box
                      className="gallery-caption"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        gap: 0.45,
                        p: { xs: 1.1, sm: 1.35, md: 1.6 },
                        color: "#fff8ea",
                        background:
                          "linear-gradient(180deg, rgba(18,13,8,0.02) 20%, rgba(18,13,8,0.78) 100%)",
                        opacity: { xs: 1, md: 0.82 },
                        transition: "opacity 0.25s ease",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Manrope', sans-serif",
                          fontSize: { xs: "0.56rem", md: "0.62rem" },
                          fontWeight: 800,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#e8c98f",
                        }}
                      >
                        {photo.kicker}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: {
                            xs: "0.98rem",
                            sm: "1.1rem",
                            md: "1.2rem",
                          },
                          fontWeight: 500,
                          lineHeight: 1.15,
                          display: "-webkit-box",
                          overflow: "hidden",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                        }}
                      >
                        {photo.title}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        {hasMorePhotos && (
          <Stack
            spacing={1.2}
            sx={{ alignItems: "center", mt: { xs: 2.5, md: 3.2 } }}
          >
            <Typography
              sx={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.82rem",
                color: "#665846",
              }}
            >
              Showing {visiblePhotos.length} of {galleryPhotos.length} photos
            </Typography>
            <Button
              type="button"
              variant="outlined"
              onClick={() => setShowAll((value) => !value)}
              sx={{
                borderColor: "rgba(122,96,64,0.32)",
                color: "#4b3827",
                bgcolor: "rgba(255,255,255,0.45)",
                "&:hover": {
                  borderColor: "#7a6040",
                  bgcolor: "rgba(255,255,255,0.72)",
                },
              }}
            >
              {showAll
                ? "Show fewer photos"
                : `Show all ${galleryPhotos.length} photos`}
            </Button>
          </Stack>
        )}
      </Container>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1400,
              background: "rgba(14, 10, 6, 0.94)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "72px 16px 28px",
              overflowX: "hidden",
              width: "100vw",
              maxWidth: "100vw",
            }}
          >
            <IconButton
              onClick={closeLightbox}
              aria-label="Close gallery"
              sx={{
                position: "fixed",
                top: "max(12px, env(safe-area-inset-top))",
                right: "max(12px, env(safe-area-inset-right))",
                zIndex: 2000,
                width: 48,
                height: 48,
                color: "#fff",
                bgcolor: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(6px)",
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.75)",
                },
              }}
            >
              <CloseRoundedIcon />
            </IconButton>

            <IconButton
              onClick={(event) => {
                event.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              sx={{
                position: "fixed",
                display: { xs: "none", md: "flex" },
                left: { xs: 8, md: 24 },
                color: "#f7efdf",
                bgcolor: "rgba(255,255,255,0.1)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.18)" },
              }}
            >
              <ArrowBackIosNewRoundedIcon />
            </IconButton>

            <IconButton
              onClick={(event) => {
                event.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              sx={{
                position: "fixed",
                display: { xs: "none", md: "flex" },
                right: { xs: 8, md: 24 },
                color: "#f7efdf",
                bgcolor: "rgba(255,255,255,0.1)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.18)" },
              }}
            >
              <ArrowForwardIosRoundedIcon />
            </IconButton>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.28, ease: easeOut }}
              onClick={(event) => event.stopPropagation()}
              style={{
                width: "min(1120px, 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 18,
              }}
            >
              <Box
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: "58vh", md: "68vh" },
                  borderRadius: "6px",
                  overflow: "hidden",
                  bgcolor: "#160f08",
                  touchAction: "pan-y",
                }}
              >
                <Image
                  src={galleryPhotos[lightbox].src}
                  alt={galleryPhotos[lightbox].alt}
                  fill
                  sizes="100vw"
                  loading="eager"
                  style={{ objectFit: "contain" }}
                />
              </Box>

              <Stack spacing={0.8} sx={{ textAlign: "center", px: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#d7b474",
                  }}
                >
                  {lightbox + 1} / {galleryPhotos.length} -{" "}
                  {galleryPhotos[lightbox].kicker}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: { xs: "1.45rem", md: "1.9rem" },
                    lineHeight: 1.18,
                    color: "#fff8ea",
                  }}
                >
                  {galleryPhotos[lightbox].title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Manrope', sans-serif",
                    color: "rgba(247,239,223,0.72)",
                    lineHeight: 1.65,
                    maxWidth: 680,
                  }}
                >
                  {galleryPhotos[lightbox].description}
                </Typography>
              </Stack>

              <Box
                sx={{
                  display: "flex",
                  gap: 0.8,
                  maxWidth: "100%",
                  overflowX: "auto",
                  px: 1,
                  pb: 0.5,
                }}
              >
                {galleryPhotos.map((photo, index) => (
                  <Box
                    key={photo.src}
                    component="button"
                    type="button"
                    aria-label={`Go to photo ${index + 1}`}
                    onClick={() => setLightbox(index)}
                    sx={{
                      flex: "0 0 auto",
                      width: { xs: 48, md: 60 },
                      aspectRatio: "1",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "4px",
                      p: 0,
                      border:
                        index === lightbox
                          ? "2px solid #d7b474"
                          : "2px solid rgba(255,255,255,0.18)",
                      cursor: "pointer",
                      bgcolor: "transparent",
                    }}
                  >
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      sizes="60px"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                ))}
              </Box>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
