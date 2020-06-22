export default class NavigationUtil {
  static resetToHomePage(params) {
    const {navigation} = params;
    navigation.navigate('HomePage');
  }
}
