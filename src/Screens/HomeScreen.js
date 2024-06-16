import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import imagePath from '../constants/imagePath'

const HomeScreen = () => {
	const songsList = [
		{
			id: 1,
			title: 'Tere Nam',
			songs: require('../assets/songs/demo1.mp3'),
			artwork: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQj_Z5NM_pRKq-cLRNVxVvRqQxGAUjMxTmg&s',

		},
		{
			title: 'Yarrian',
			id: 2, songs: require('../assets/songs/demo1.mp3'), artwork: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuvlMnPiRPc4WzxB86K0S_Rkf-427iBhp1Tw&s'
		}

	]
	return (
		<LinearGradient
			colors={['pink', '#000000']}
			style={{
				flex: 1,
				paddingTop: 64,
				paddingHorizontal: 16
			}}>
			<StatusBar translucent backgroundColor={'transparent'} />
			<Image source={imagePath.icBackArrow}
			/>
			<View style={{ flexDirection: "row", marginHorizontal: 14 }}>
				<View style={{
					height: 36,
					width: '80%',
					backgroundColor: 'pink',
					borderRadius: 4,
					flexDirection: 'row',
					paddingLeft: 15,
					alignItems: "center",
				}}>



					<Image source={imagePath.search2}
						style={{ tintColor: 'white' }} />
					<Text style={{ color: 'white', marginLeft: 5 }}>
						Find in Playlist
					</Text>
				</View>
				<View style={{
					height: 36,
					width: '20 %',
					backgroundColor: 'pink',
					borderRadius: 4,
					paddingLeft: 15,
					alignItems: "center",
					marginLeft: 5,
					justifyContent: 'center',

				}}>
					<Text style={{
						color: 'white',

					}}>Sort</Text>

				</View>

			</View>
			<Image
				source={{
					uri: 'https://media.takealot.com/covers_images/0a0173183a9644e7966ebb232fa8951b/s-pdpxl.file'
				}}
				style={{
					height: '40%',
					width: '90%',
					alignItems: 'center',
					alignContent: "center",
					alignSelf: "center",
					marginTop: 30
				}} />
			<View style={{
				marginTop: 20,
				flexDirection: "row",
				alignItems: "center",
				paddingLeft: 16
			}}>
				<Image
					source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZBdUhTD9IqfQdGhx9t3zscLFKFLbVUsGmA&s' }}
					style={{
						height: 24,
						width: 24,
						borderRadius: 18,
						marginRight: 5
					}} />
				<Text style={{
					color: 'white',
					fontSize: 14
				}}>Pop Songs</Text>
			</View>
			<View style={{
				marginTop: 10,
				flexDirection: "row",
				alignItems: "center",
				paddingLeft: 24
			}}>
				<Text style={{
					color: '#bababa',
					fontSize: 12
				}}>20,455 saves</Text>
				<Text style={{
					color: '#bababa',
					fontSize: 12,
					marginLeft: 10
				}}>4h 2m</Text>
			</View>
			<View
				style={{
					flexDirection: 'row',
					alignItems: "center",
					marginTop: 20
				}}>
				<View style={{
					flexDirection: "row",
					flex: 0.7,
				}}>
					<View style={{
						borderWidth: 1,
						height: 35,
						width: 35,
						borderColor: '#bababa',
						borderRadius: 40,
						alignItems: 'center',
						alignContent: "center",
						justifyContent: "center",
						marginRight: 6

					}}>
						<Image
							source={imagePath.plus}
							style={{
								tintColor: '#bababa',
								height: 16,
								width: 16,
								resizeMode: 'contain'
							}} />
					</View>
					<View
						style={{
							borderWidth: 1,
							height: 35,
							width: 35,
							borderColor: '#bababa',
							borderRadius: 40,
							alignItems: 'center',
							alignContent: "center",
							justifyContent: "center",
							marginRight: 6
						}}>
						<Image
							source={imagePath.ic_down_arrow}
							style={{
								tintColor: 'bababa',
								height: 16,
								width: 16,
								resizeMode: 'contain'
							}} />
					</View>
					<View
						style={{
						}}>

						<Image
							source={imagePath.more}
							style={{
								height: 34,
								width: 34,
								resizeMode: 'contain',
								borderRadius: 20
							}} />
					</View>

				</View>
				<TouchableOpacity
					style={{
						flex: 0.3
					}}>
					<Image source={imagePath.icPlayVideo}
						style={{
							height: 38, width: 38,
							tintColor: '#00b140'
						}} />
				</TouchableOpacity>

			</View>
			<FlatList data={songsList}
				renderItem={({ item, index }) => {
					return (
						<TouchableOpacity style={{
							width: '100%',
							height: 50,
							flexDirection: 'row',
							justifyContent: 'space-between ',
							paddingLeft: 20,
							marginTop: 20
						}}>
							<Image source={{ uri: item.artwork }}
								style={{
									height: 50, width: 50,
									borderRadius: 5
								}} />
								<Text style={{color:'white'}}>
									{item.title}
								</Text>
						</TouchableOpacity>
					)
				}} />

		</LinearGradient>
	)
}

export default HomeScreen

const styles = StyleSheet.create({})