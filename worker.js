export default {
  async fetch() {
    return new Response(
      "SPORT SOCIAL API fonctionne ✅",
      {
        headers: {
          "content-type": "text/plain;charset=UTF-8"
        }
      }
    );
  }
};
