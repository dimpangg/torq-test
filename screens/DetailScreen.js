import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {color, font, IcBack} from '../assets';
import {Tables} from '../components';

const DetailScreen = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <ScrollView>
      <View style={styles.containerTop}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={styles.back}>
          <IcBack />
        </TouchableOpacity>
        <Text style={styles.title}>Detail Car</Text>
      </View>
      <View style={styles.containerBottom}>
        <Image source={{uri: item.urlImage}} style={styles.image} />

        {/* detail */}
        <View style={[styles.card, {backgroundColor: color.dark}]}>
          <Text style={styles.cardTitle}>Detail</Text>
          <Tables title="Factory" content={item.factory.name} />
          <Tables title="Model" content={item.model.name} />
          <Tables title="Country" content={item.country.name} />
          <Tables title="Version" content={item.version} />
          <Tables title="Date Launch" content={item.dateOfLaunch} />
          <Tables title="MSRP" content={item.msrp} />
        </View>

        {/* body dimension */}
        <View style={[styles.card, {backgroundColor: color.white}]}>
          <Text style={styles.cardTitle}>Body & Dimensions</Text>
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            title="Body Type"
            content={item.bodyType}
            textColor={color.dark}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            title="Doors"
            content={item.doors}
            textColor={color.dark}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            title="Riding Capacity"
            content={item.capacity}
            textColor={color.dark}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            title="Model Code"
            content={item.modelCode}
            textColor={color.dark}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            title="Overall Length"
            content={item.bdLength}
            textColor={color.dark}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            title="Overall Width"
            content={item.bdWidth}
            textColor={color.dark}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            title="Overall Height"
            content={item.bdHeigth}
            textColor={color.dark}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            title="Wheel Base"
            content={item.wheelBase}
            textColor={color.dark}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            title="Thread Front"
            content={item.threadFront}
            textColor={color.dark}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            title="Thread Rear"
            content={item.threadRear}
            textColor={color.dark}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            title="Interior Length"
            content={item.bdInteriorLength}
            textColor={color.dark}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            title="Interior Width"
            content={item.bdInteriorWidth}
            textColor={color.dark}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            title="Interior Height"
            content={item.bdInteriorHeigth}
            textColor={color.dark}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Weight"
            content={item.bdWeigth}
          />
        </View>

        {/* engine */}
        <View style={[styles.card, {backgroundColor: color.white}]}>
          <Text style={styles.cardTitle}>Engine</Text>
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Engine Model"
            content={item.engineModel}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Cylinders"
            content={item.cylinder}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Max Power (ps)"
            content={item.maxPowerPS}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Max Power (kW)"
            content={item.maxPowerKW}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Max Power (rpm)"
            content={item.maxPowerRPM}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Max Torque (kgm)"
            content={item.maxTorqueKGM}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Max Torque (Nm)"
            content={item.maxTorqueNM}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Max Torque (rpm)"
            content={item.maxTorqueRPM}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Displacement"
            content={item.displacement}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Bore"
            content={item.bore}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Stroke"
            content={item.stroke}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Charger"
            content={item.charger}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Fuel Supply Equipment"
            content={item.fuelSupplyEquip}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Fuel Tank Equipment"
            content={item.fuelTankEquip}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Fuel Type"
            content={item.fuelType}
          />
        </View>

        {/* drivetrain */}
        <View style={[styles.card, {backgroundColor: color.white}]}>
          <Text style={styles.cardTitle}>Drivetrain</Text>
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Steering System"
            content={item.steeringSystem}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Minimum Turning Radius"
            content={item.minTurningRadius}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Suspension System (front)"
            content={item.frontSuspenseSystem}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Suspension System (rear)"
            content={item.rearSuspenseSystem}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Braking System (front)"
            content={item.frontBrakeSystem}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Braking System (rear)"
            content={item.rearBrakeSystem}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Tire Size (front)"
            content={item.frontTyreSize}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Tire Size (rear)"
            content={item.rearTyreSize}
          />
        </View>

        {/* transmission */}
        <View style={[styles.card, {backgroundColor: color.white}]}>
          <Text style={styles.cardTitle}>Transmission</Text>
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Driving Wheel"
            content={item.driveWheel}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Transmission"
            content={item.transmission}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="LSD"
            content={item.lsd}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="1st Gear"
            content={item.firstGear}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="2nd Gear"
            content={item.secGear}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="3rd Gear"
            content={item.thirdGear}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="4th Gear"
            content={item.fourthGear}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="5th Gear"
            content={item.fifthGear}
          />
          <Tables
            flexStart={0.4}
            flexEnd={0.5}
            textColor={color.dark}
            title="Final Drive Gear Ratio"
            content={item.finalDriveGearRatio}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  containerTop: {
    backgroundColor: color.primary,
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 40,
  },
  back: {
    marginBottom: 16,
  },
  title: {
    fontFamily: font.medium,
    color: color.white,
    fontSize: 20,
  },
  containerBottom: {
    backgroundColor: color.lightGray,
    padding: 8,
    paddingBottom: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 180,
    marginTop: 32,
    borderColor: `rgba(${color.darkRgb}, 0.4)`,
    borderWidth: 1,
    borderRadius: 10,
  },
  card: {
    padding: 16,
    borderRadius: 10,
    marginTop: 24,
    width: '90%',
  },
  cardTitle: {
    fontFamily: font.medium,
    fontSize: 18,
    color: color.secondary,
    marginBottom: 8,
  },
});
