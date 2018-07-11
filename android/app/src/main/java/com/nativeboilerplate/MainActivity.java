package com.nativeboilerplate;

import com.facebook.react.ReactActivity;

import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.soloader.SoLoader;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this);  // here
      super.onCreate(savedInstanceState);
      SoLoader.init(this, /* native exopackage */ false);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "nativeBoilerplate";
    }
}
