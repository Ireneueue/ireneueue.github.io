/*
  Irene's works, room by room.
  Each work:  src    image path inside the gallery folder (leave it out for a placeholder)
              title, technique, size (text shown on the label), year, note (optional description)
              w, h   real size in cm (width × height as it hangs). If the photo turns out
                     to be the other orientation, the gallery swaps them automatically.
  Placeholders (no src) are drawn by the gallery until the real photos are added.
*/
window.GALLERY = {
  charcoal: [
    { title: "Untitled I",    technique: "Charcoal on Ingres paper", size: "50 × 70 cm", w: 50, h: 70, year: "" },
    { title: "Untitled II",   technique: "Charcoal on Ingres paper", size: "70 × 50 cm", w: 70, h: 50, year: "" },
    { title: "Untitled III",  technique: "Charcoal on Ingres paper", size: "50 × 70 cm", w: 50, h: 70, year: "" },
    { title: "Untitled IV",   technique: "Charcoal on Ingres paper", size: "50 × 70 cm", w: 50, h: 70, year: "" },
    { title: "Untitled V",    technique: "Charcoal on Ingres paper", size: "70 × 50 cm", w: 70, h: 50, year: "" },
    { title: "Untitled VI",   technique: "Charcoal on Ingres paper", size: "50 × 70 cm", w: 50, h: 70, year: "" },
    { title: "Untitled VII",  technique: "Charcoal on Ingres paper", size: "70 × 50 cm", w: 70, h: 50, year: "" },
    { title: "Untitled VIII", technique: "Charcoal on Ingres paper", size: "50 × 70 cm", w: 50, h: 70, year: "" }
  ],
  // Sizes are provisional (estimated from the photos) until Irene gives the real measurements.
  oil: [
    { src: "oil-portrait-with-cat.jpg", title: "Portrait with cat", technique: "Oil", size: "", w: 73, h: 60, year: "" },
    { src: "oil-bench-at-dusk.jpg", title: "Bench at dusk", technique: "Oil", size: "", w: 81, h: 59, year: "" },
    { src: "oil-portrait-bearded-man.jpg", title: "Portrait of a bearded man", technique: "Oil", size: "", w: 53, h: 73, year: "" },
    { src: "oil-trombone.jpg", title: "Trombone", technique: "Oil", size: "", w: 81, h: 57, year: "" },
    { src: "oil-reclining-nude.jpg", title: "Reclining nude", technique: "Oil", size: "", w: 116, h: 80, year: "" },
    { src: "oil-market.jpg", title: "Market stall", technique: "Oil", size: "", w: 59, h: 73, year: "" },
    { src: "oil-self-portrait-surprise.jpg", title: "Surprise", technique: "Oil", size: "", w: 50, h: 73, year: "" },
    { src: "oil-mountain-landscape.jpg", title: "Mountain landscape", technique: "Oil", size: "", w: 73, h: 53, year: "" },
    { src: "oil-sheep-in-the-meadow.jpg", title: "Sheep in the meadow", technique: "Oil", size: "", w: 65, h: 45, year: "" }
  ],
  quick: [
    { title: "Untitled I",    technique: "Indian ink on paper", size: "", w: 21, h: 30, year: "" },
    { title: "Untitled II",   technique: "Oil, painted outdoors", size: "", w: 46, h: 38, year: "" },
    { title: "Untitled III",  technique: "Indian ink on paper", size: "", w: 30, h: 21, year: "" },
    { title: "Untitled IV",   technique: "Oil, painted outdoors", size: "", w: 33, h: 41, year: "" },
    { title: "Untitled V",    technique: "Indian ink on paper", size: "", w: 21, h: 30, year: "" },
    { title: "Untitled VI",   technique: "Oil, painted outdoors", size: "", w: 55, h: 38, year: "" },
    { title: "Untitled VII",  technique: "Indian ink on paper", size: "", w: 15, h: 21, year: "" },
    { title: "Untitled VIII", technique: "Oil, painted outdoors", size: "", w: 41, h: 33, year: "" },
    { title: "Untitled IX",   technique: "Indian ink on paper", size: "", w: 30, h: 21, year: "" }
  ],
  // Sketchbook pages, in order. Any size or orientation works.
  sketchbook: [
    { title: "Sketch 1", orient: "portrait" },  { title: "Sketch 2", orient: "landscape" },
    { title: "Sketch 3", orient: "portrait" },  { title: "Sketch 4", orient: "portrait" },
    { title: "Sketch 5", orient: "landscape" }, { title: "Sketch 6", orient: "square" },
    { title: "Sketch 7", orient: "portrait" },  { title: "Sketch 8", orient: "landscape" },
    { title: "Sketch 9", orient: "portrait" },  { title: "Sketch 10", orient: "portrait" }
  ],
  // Digital drawings shown on the iPad.
  digital: [
    { title: "Digital 1", orient: "portrait" }, { title: "Digital 2", orient: "landscape" },
    { title: "Digital 3", orient: "portrait" }, { title: "Digital 4", orient: "square" },
    { title: "Digital 5", orient: "portrait" }
  ],
  installation: {
    title: "Group installation",
    technique: "Final project, first year of Fine Arts (UPV)",
    note: "3D model in preparation."
  }
};
