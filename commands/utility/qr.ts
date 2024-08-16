import { AttachmentBuilder, Message, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("qr")
    .setDescription("Generates a qr code with the text you provide!")
    .addStringOption(option =>
      option
        .setName("text")
        .setRequired(true)
        .setDescription("The text to code in the QR code."))
  ,
  async execute(interaction: Message) {
    // @ts-ignore interaction.options field exist
    const res = await fetch(`https://quickchart.io/qr?text=${encodeURIComponent(interaction.options.getString("text"))}`);
    if (!res.ok) {
      await interaction.reply("Failed to generate QR code.");
      return;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    const attachment = new AttachmentBuilder(buffer, { name: "qr.png" });

    await interaction.reply({
      files: [attachment],
    });
  },
}
