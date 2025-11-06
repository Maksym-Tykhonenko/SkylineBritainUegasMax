import { Platform } from "react-native";

export default [
    {
        skySlideNumberIndx: 1,
        onestSkyLineTitle: `Welcome to ${Platform.OS === 'android' ? 'Leoline Britain Vegas' : 'Skyline Britain Uegas'}`,
        britiOnestLineDescr: `Hello! I’m Eliza, your personal guide to the sky-high ${Platform.OS === 'android' ? 'leo' : 'sky'}lines of Britain.
Together we’ll journey through the lights of cities and the silence of cliffs, discovering the country from a new perspective.`,
        imaLineUegasSkyline: require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/britWelcomeUegasSky/elizaFirst.png'),
        uegasSkyBritianTxt: 'Hello, Eliza'
    },
    {
        skySlideNumberIndx: 2,
        onestSkyLineTitle: `Explore iconic ${Platform.OS === 'android' ? 'leo' : 'sky'}lines`,
        britiOnestLineDescr: `From London at night to the windswept hills of Scotland, every place has its own mood.
Tap the dots on the map and find places that inspire you.`,
        imaLineUegasSkyline: require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/britWelcomeUegasSky/withBigBan.png'),
        uegasSkyBritianTxt: 'Continue'
    },
    {
        skySlideNumberIndx: 3,
        onestSkyLineTitle: 'Choose your vibe',
        britiOnestLineDescr: `What's your mood today?
Choose your emoji and I'll show you places that match your mood.`,
        imaLineUegasSkyline: require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/britWelcomeUegasSky/finalCheckSlide.png'),
        uegasSkyBritianTxt: 'Start travel'
    },
]