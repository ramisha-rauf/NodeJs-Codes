const express =require('express')
const router = express.Router()

const{
    getSamples,
    getSampleById,
    deleteSamples,
    createNewSample,
    countSamples, 
    updateSample,
    getOneSample
} = require('../controller/sampleController')

router.route('/getSamples').get(getSamples)
router.route('/getSampleById/:id').get(getSampleById)
router.route('/delete').delete(deleteSamples)
router.route('/oneSample').get(getOneSample)
//router.route('/createSample').post(createNewSample)
router.route('/count').get(countSamples)
//router.route('/update/:id').put(updateSample)

module.exports = router