import { Text, Button } from 'react-native';

const Onboarding = ({ navigation }) => {
  return (
    <>
      <Text>Hi!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
    </>
  );
};

export default Onboarding;
