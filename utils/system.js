const STSTEM_INFO = uni.getSystemInfoSync()

export const getStatusBarHeight = () => STSTEM_INFO.statusBarHeight || 15
export const getTitleBarHeight = () => {
	if(uni.getMenuButtonBoundingClientRect()) {
		const { top, height } = uni.getMenuButtonBoundingClientRect()
		return (top - getStatusBarHeight()) * 2 + height || 0
	} else {
		return 40
	}
}
export const navBarHeight = () => getStatusBarHeight() + getTitleBarHeight()
