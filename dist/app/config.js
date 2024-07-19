var config = {
  salvarDados: true,
  debug: false,
  waterMark: false,
  language: "pt-br",
  lms: {
    name: "default",
  },
  acessibility: {
    tools: false,
    outlines: false,
    vlibras: false,
    customLibras: false,
  },
  behaviors: {
    adaptive: false,
    width: 1920,
    height: 1080,
    fontSize: 30,
  },
  modalVoltar: {
    active: false,
    msg: "Você quer continuar de onde parou ou reiniciar o curso?",
    yes: "CONTINUAR",
    no: "REINICIAR",
    color: "#0a698d",
  },
  pages: [
    {
      uid: "01_capa",
      src: "01_capa/index.html",
    },
    {
      uid: "02_city",
      src: "02_city/index.html",
    },
    {
      uid: "03_avatar",
      src: "03_avatar/index.html",
    },
    {
      uid: "03_intro",
      src: "03_intro/index.html",
    },
    {
      uid: "04_c1",
      src: "04_c1/index.html",
    },
    {
      uid: "05_c1_m1",
      src: "05_c1_m1/index.html",
    },
    {
      uid: "06_c1_m1_video",
      src: "06_c1_m1_video/index.html",
    },
    {
      uid: "07_c1_m2",
      src: "07_c1_m2/index.html",
    },
    {
      uid: "08_c1_m2_video",
      src: "08_c1_m2_video/index.html",
    },
    {
      uid: "09_c1_m2_pdf",
      src: "09_c1_m2_pdf/index.html",
    },
    {
      uid: "10_c1_m3",
      src: "10_c1_m3/index.html",
    },
    {
      uid: "11_c1_m3_video",
      src: "11_c1_m3_video/index.html",
    },
    {
      uid: "12_c1_m3_pdf",
      src: "12_c1_m3_pdf/index.html",
    },
    {
      uid: "13_c1_m4",
      src: "13_c1_m4/index.html",
    },
    {
      uid: "14_c1_m4_video",
      src: "14_c1_m4_video/index.html",
    },
    {
      uid: "15_c1_m4_pdf",
      src: "15_c1_m4_pdf/index.html",
    },
    {
      uid: "16_c1_m5",
      src: "16_c1_m5/index.html",
    },
    {
      uid: "17_c1_m5_video",
      src: "17_c1_m5_video/index.html",
    },
    {
      uid: "18_c1_m5_pdf",
      src: "18_c1_m5_pdf/index.html",
    },
    {
      uid: "19_c1_m6",
      src: "19_c1_m6/index.html",
    },
    {
      uid: "20_c1_m6_video",
      src: "20_c1_m6_video/index.html",
    },
    {
      uid: "50_final",
      src: "50_final/index.html",
    },
  ],
};
try {
  module.exports = config;
} catch (e) {}
