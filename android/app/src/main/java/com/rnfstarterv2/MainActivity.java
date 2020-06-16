package com.rnfstarterv2;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "rnfStarterV2";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this); // here
    super.onCreate(savedInstanceState);
  }
}
