import express from 'express';

import users from './users';
import students from './students';
import studentMaps from './student-maps';
import courses from './courses';
import competences from './competences';
import studentCompetences from './student-competences';
import activities from './activities';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

router.use('/api', users);
router.use('/api', students);
router.use('/api', studentMaps);
router.use('/api', courses);
router.use('/api', competences);
router.use('/api', studentCompetences);
router.use('/api', activities);

export default router;;
