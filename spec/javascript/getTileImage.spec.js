const { getTileImage } = require('../../app/javascript/react/components/UtilityFunctions/getTileImage')

test('Returns image URL based on name', () => {
  const tileImage = getTileImage('Bear Brook State Park')
  expect(tileImage).toBe("/images/bear-brook/bear-brook-1.jpg")
});
