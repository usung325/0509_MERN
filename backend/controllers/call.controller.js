import Call from "../models/call.model.js";

export const getCalls = async (req, res) => {
  try {
    const allCalls = await Call.find({});
    res.status(200).json({ success: true, data: allCalls });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "could not find any calls" });
  }
};

export const createCall = async (req, res) => {
  const call = req.body; //user will send this data

  if (!call.name || !call.length || !call.date) {
    return res
      .status(400)
      .json({ success: false, message: "you need to provide all fields man" });
  }

  const newCall = new Call(call);

  try {
    await newCall.save();
    res.status(201).json({ success: true, data: newCall });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "error" });
  }
};
