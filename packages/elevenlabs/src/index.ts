import axios from "axios";

const headers = {
  Accept: "audio/mpeg",
  "xi-api-key": process.env.ELEVENLABS_API_KEY,
  "Content-Type": "application/json",
};

export const speak = async (text: string) => {
  try {
    const body = JSON.stringify({
      text: text,
      model_id: "eleven_multilingual_v2",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.5,
      },
    });

    const response = await axios.post(
      "https://api.elevenlabs.io/v1/text-to-speech/Jx8YyCmL25lLJ635eG8w",
      body,
      {
        headers: headers,
        responseType: "blob",
      },
    );

    return response.data;
  } catch (error: any) {
    console.log({ errorSpeak: error.response.data });
  }
};
