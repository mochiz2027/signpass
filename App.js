import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  BackHandler,
  Platform,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Modal
} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

// Web 환경과 네이티브 환경 분기 처리
let WebView = null;
if (Platform.OS !== 'web') {
  try {
    WebView = require('react-native-webview').WebView;
  } catch (e) {
    console.warn('react-native-webview not loaded', e);
  }
}

const DEFAULT_LOCAL_URL = 'http://192.168.0.102:8080/index.html';

export default function App() {
  const [currentUrl, setCurrentUrl] = useState(DEFAULT_LOCAL_URL);
  const [inputUrl, setInputUrl] = useState(DEFAULT_LOCAL_URL);
  const [isLoading, setIsLoading] = useState(true);
  const [canGoBack, setCanGoBack] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const webviewRef = useRef(null);

  // 안드로이드 하드웨어 뒤로가기 버튼 핸들러
  useEffect(() => {
    if (Platform.OS === 'android') {
      const onBackPress = () => {
        if (canGoBack && webviewRef.current) {
          webviewRef.current.goBack();
          return true;
        }
        return false;
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => subscription.remove();
    }
  }, [canGoBack]);

  const handleApplyUrl = () => {
    setCurrentUrl(inputUrl);
    setShowConfig(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="light" backgroundColor="#0b1329" />

      {/* 설정 바 (IP 변경 또는 새로고침 버튼) */}
      <View style={styles.topToolbar}>
        <Text style={styles.appTitle}>SignPass App</Text>
        <View style={styles.toolbarButtons}>
          {Platform.OS !== 'web' && (
            <TouchableOpacity
              style={styles.toolButton}
              onPress={() => webviewRef.current?.reload()}
            >
              <Text style={styles.toolButtonText}>새로고침</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[styles.toolButton, styles.configButton]}
            onPress={() => setShowConfig(true)}
          >
            <Text style={styles.toolButtonText}>URL설정</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* URL 설정 모달 */}
      <Modal visible={showConfig} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>SignPass 접속 URL 설정</Text>
            <Text style={styles.modalDescription}>
              PC와 스마트폰이 같은 Wi-Fi에 연결되어 있어야 로컬 IP 접속이 가능합니다.
            </Text>
            <TextInput
              style={styles.urlInput}
              value={inputUrl}
              onChangeText={setInputUrl}
              placeholder="http://192.168.0.102:8080/index.html"
              placeholderTextColor="#666"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalBtn, styles.cancelBtn]}
                onPress={() => setShowConfig(false)}
              >
                <Text style={styles.cancelBtnText}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalBtn, styles.confirmBtn]}
                onPress={handleApplyUrl}
              >
                <Text style={styles.confirmBtnText}>적용 및 새로고침</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* 콘텐츠 영역: Web vs Native */}
      {Platform.OS === 'web' ? (
        <View style={styles.webContainer}>
          <iframe
            src="/index.html"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            title="SignPass Web"
          />
        </View>
      ) : (
        WebView && (
          <View style={styles.webviewContainer}>
            <WebView
              ref={webviewRef}
              source={{ uri: currentUrl }}
              style={styles.webview}
              onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)}
              onLoadStart={() => setIsLoading(true)}
              onLoadEnd={() => setIsLoading(false)}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              allowsInlineMediaPlayback={true}
              scalesPageToFit={true}
              mixedContentMode="always"
            />
            {isLoading && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0066ff" />
                <Text style={styles.loadingText}>SignPass 로딩 중...</Text>
              </View>
            )}
          </View>
        )
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1329',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  topToolbar: {
    height: 44,
    backgroundColor: '#0f172a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  appTitle: {
    color: '#00e5ff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  toolbarButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  toolButton: {
    backgroundColor: '#1e293b',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#334155',
  },
  configButton: {
    backgroundColor: '#0052cc',
    borderColor: '#0066ff',
  },
  toolButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  webviewContainer: {
    flex: 1,
    backgroundColor: '#0b1329',
    position: 'relative',
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  webContainer: {
    flex: 1,
    backgroundColor: '#0b1329',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0b1329',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  loadingText: {
    marginTop: 12,
    color: '#94a3b8',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 8,
  },
  modalDescription: {
    fontSize: 13,
    color: '#94a3b8',
    marginBottom: 16,
    lineHeight: 18,
  },
  urlInput: {
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#475569',
    borderRadius: 8,
    padding: 12,
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  modalBtn: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  cancelBtn: {
    backgroundColor: '#334155',
  },
  cancelBtnText: {
    color: '#f1f5f9',
    fontSize: 14,
  },
  confirmBtn: {
    backgroundColor: '#0066ff',
  },
  confirmBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
