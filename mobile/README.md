Mojave Debug

1) node_modules/react-native/scripts/ios-install-third-party.sh

2) 
Running into the same issue here after upgrading from 0.44. None of the above solutions or clearing caches did the trick for me. Here's what I did to get things working again:

    In the Terminal, navigate to the react-native/third-party/glog folder inside node_modules (for me, this was cd node_modules/react-native/third-party/glog-0.3.4)
    Once actively in this folder, run ../../scripts/ios-configure-glog.sh
    Glog is configured and the required config.h header file is created for Xcode to find

3) react-native run-ios

4) stop and
react-native start --reset-cache

