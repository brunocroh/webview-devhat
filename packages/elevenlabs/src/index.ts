import * as fs from "fs";
import axios, { AxiosError } from "axios";
import { upload } from "@repo/aws";

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
      "https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM",
      body,
      {
        headers: headers,
        responseType: "stream",
      },
    );

    return response.data;
  } catch (error: any) {
    console.log({ errorSpeak: error.response.data });
  }
};

export const speakToS3 = async (text: string) => {
  const audioStream = await speak(text);
  return upload(audioStream);
};

export const speakToFile = async (text: string, fileName: string) => {
  try {
    const audioStream = await speak(text);

    audioStream.pipe(fs.createWriteStream(fileName));

    const writeStream = fs.createWriteStream(fileName);
    audioStream.pipe(writeStream);

    return new Promise((resolve, reject) => {
      const responseJson = {
        status: "ok",
        fileName: fileName,
      };
      writeStream.on("finish", () => resolve(responseJson));

      writeStream.on("error", reject);
    });
  } catch (error: any) {
    console.log({ errorSpeak: error.response.data });
  }
};
