import React from "react";
import { InlineShareButtons } from "sharethis-reactjs";

export default function ShareButtons({
  title,
  url,
  twitterHandle,
  tags,
  media,
  description,
}) {
  return (
    <InlineShareButtons
      config={{
        alignment: "center",
        color: "social", // set the color of buttons (social, white)
        enabled: true,
        font_size: 16,
        labels: "cta", // button labels (cta, counts, null)
        language: "en",
        networks: ["facebook", "twitter", "linkedin", "pinterest", "email"],
        padding: 12,
        radius: 4,
        show_total: true,
        size: 40,

        // url: "https://www.sharethis.com",
        // image: "https://bit.ly/2CMhCMC",
        // description: "custom text",
        // title: "custom title",
        message: `${title}`,
        subject: `${description}`,
        username: `${twitterHandle}`,
      }}
    />
  );
}
