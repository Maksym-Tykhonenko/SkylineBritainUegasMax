import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Share, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');

type BlogItem = {
    id: number;
    skyTitle: string;
    blogs: string[];
    imgOfBritBlog: any;
};

export default function UegasUnitedBlogModal({
    visible,
    onClose,
    blog,
}: {
    visible: boolean;
    onClose: () => void;
    blog: BlogItem | null;
}) {
    const [page, setPage] = React.useState(0);
    const scale = React.useRef(new Animated.Value(0.9)).current;

    React.useEffect(() => {
        if (visible) {
            setPage(0);
            Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
        } else {
            scale.setValue(0.9);
        }
    }, [visible]);

    if (!blog) return null;

    const total = blog.blogs.length;
    const currentText = blog.blogs[page];

    const doShare = async () => {
        try {
            await Share.share({
                message: `${blog.skyTitle}\n\n${currentText}`,
            });
        } catch (e) { /* ignore */ }
    };

    const onNext = () => {
        if (page < total - 1) setPage(p => p + 1);
        else onClose();
    };

    return (
        <Modal visible={visible} transparent animationType="none">
            <View style={styles.backdrop}>
                <LinearGradient
                    colors={['#00f00c1f', '#0880c537', '#c9369832', '#ff6d443f', '#ffc9352f']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    locations={[0, 0.4, 0.59, 0.78, 1]}
                    style={{
                        width: width,         // важливо — фіксована ширина для ровного контуру
                        height: '100%',
                        // overflow: 'hidden',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        // opacity: 0.25,
                    }}
                />
                <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
                    <View style={styles.imageWrap}>
                        <Image source={blog.imgOfBritBlog} style={styles.image} resizeMode="cover" />
                        <View style={styles.topRight}>
                            <View style={styles.pageBubble}>
                                <Text style={styles.pageText}>{`${page + 1}/${total}`}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.content}>
                        <View style={styles.titleRow}>
                            <Text style={styles.title}>{blog.skyTitle}</Text>
                            <TouchableOpacity onPress={doShare} style={styles.shareBtn}>
                                <Image source={require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/shareSkyWithDots.png')} style={styles.shareIcon} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.body} numberOfLines={10}>
                            {currentText.trim()}
                        </Text>

                        <View style={{ alignItems: 'flex-end' }}>
                            <TouchableOpacity style={styles.nextButton} onPress={onNext} activeOpacity={0.85}>
                                <Text style={styles.nextText}>{page < total - 1 ? 'Next page' : 'Close'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.View>

                <TouchableOpacity style={styles.closeButton} onPress={onClose} activeOpacity={0.9}>
                    <Text style={styles.closeText}>✕ Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const CARD_WIDTH = width * 0.86;
const IMAGE_HEIGHT = CARD_WIDTH * 0.56;

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    card: {
        width: CARD_WIDTH,
        borderRadius: 18,
        backgroundColor: '#0C0C0C',
        overflow: 'hidden',
        elevation: 10,
        shadowColor: '#f42e2eff',
        shadowOpacity: 0.4,
        shadowRadius: 19,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 1)',
    },
    imageWrap: {
        width: '100%',
        height: IMAGE_HEIGHT,
        backgroundColor: '#222',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    topRight: {
        position: 'absolute',
        right: 12,
        top: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    pageBubble: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 14,
    },
    pageText: {
        color: '#fff',
        fontSize: 12,
    },
    content: {
        padding: 18,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        flex: 1,
        marginRight: 8,
    },
    shareBtn: {
        padding: 6,
    },
    shareIcon: {
        width: 20,
        height: 20,
        tintColor: '#fff',
        resizeMode: 'contain',
    },
    body: {
        color: '#A6A6A6',
        fontSize: 14,
        lineHeight: 22,
        marginTop: 6,
    },
    nextButton: {
        backgroundColor: '#900B0B',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 28,
        marginTop: 16,
    },
    nextText: {
        color: '#fff',
        fontWeight: '600',
    },
    closeButton: {
        marginTop: 18,
        backgroundColor: '#900B0B',
        paddingHorizontal: 26,
        paddingVertical: 12,
        borderRadius: 30,
    },
    closeText: {
        color: '#fff',
        fontWeight: '700',
    },
});