import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  scoreItem: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  playerLabelNos: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black', 
  },
  playerScoreNos: {
    fontSize: 120,
    fontWeight: 'bold',
    color: 'black', 
  },
  playerLabelEles: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black', 
  },
  playerScoreEles: {
    fontSize: 120,
    fontWeight: 'bold',
    color: 'black', 
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  buttonGroup: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 18,
    borderRadius: 5,
    marginVertical: 5, 
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonGreen: {
    backgroundColor: 'green',
  },
  buttonRed: {
    backgroundColor: 'red',
  },
  buttonReset: {
    backgroundColor: 'black',
  },
});

export default styles;
