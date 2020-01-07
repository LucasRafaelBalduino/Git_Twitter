import axios from 'axios';
import DevModel from '../models/Dev';

export default {
  async store(req, res) {
    const { username } = req.body;
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const {
      name,
      bio,
      public_repos,
      followers,
      avatar_url: avatar,
    } = response.data;
    if (name === null) {
      console.log('sem nome');
    }
    const dev = await DevModel.create({
      name,
      user: username,
      bio,
      public_repos,
      followers,
      avatar,
    });

    return res.json(dev);
  },
};
