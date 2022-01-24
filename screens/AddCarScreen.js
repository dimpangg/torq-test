import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {color, font, IcBack} from '../assets';
import {TextInput} from '../components';
import {addCar} from '../redux/action';
import {useForm} from '../utils';

const AddCarScreen = ({navigation}) => {
  const [form, setForm] = useForm({
    factory: '',
    model: '',
    country: '',
    version: '',
    dateOfLaunch: '',
    msrp: '',
    urlImage: '',
    bodyType: '',
    doors: '',
    capacity: '',
    modelCode: '',
    bdLength: '',
    bdWidth: '',
    bdHeigth: '',
    wheelBase: '',
    threadFront: '',
    threadRear: '',
    bdInteriorLength: '',
    bdInteriorWidth: '',
    bdInteriorHeigth: '',
    bdWeigth: '',
    engineModel: '',
    cylinder: '',
    maxPowerPS: '',
    maxPowerKW: '',
    maxPowerRPM: '',
    maxTorqueKGM: '',
    maxTorqueNM: '',
    maxTorqueRPM: '',
    displacement: '',
    bore: '',
    stroke: '',
    ratioCompression: '',
    charger: '',
    fuelSupplyEquip: '',
    fuelTankEquip: '',
    fuelType: '',
    steeringSystem: '',
    minTurningRadius: '',
    frontSuspenseSystem: '',
    rearSuspenseSystem: '',
    frontBrakeSystem: '',
    rearBrakeSystem: '',
    frontTyreSize: '',
    rearTyreSize: '',
    driveWheel: '',
    transmission: '',
    lsd: '',
    firstGear: '',
    secGear: '',
    thirdGear: '',
    fourthGear: '',
    fifthGear: '',
    finalDriveGearRatio: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(addCar(form, navigation));
  };

  return (
    <ScrollView>
      <View style={styles.containerTop}>
        <Text style={styles.title}>Add Car</Text>
      </View>
      <View style={styles.containerBottom}>
        <Text style={styles.textTitle}>Detail</Text>
        <TextInput
          value={form.factory}
          onChangeText={value => setForm('factory', value)}
          title="Factory"
        />
        <TextInput
          value={form.model}
          onChangeText={value => setForm('model', value)}
          title="Model"
        />
        <TextInput
          value={form.country}
          onChangeText={value => setForm('country', value)}
          title="Country"
        />
        <TextInput
          value={form.version}
          onChangeText={value => setForm('version', value)}
          title="Version"
        />
        <TextInput
          value={form.dateOfLaunch}
          onChangeText={value => setForm('dateOfLaunch', value)}
          title="Date of Launch"
        />
        <TextInput
          value={form.msrp}
          onChangeText={value => setForm('msrp', value)}
          title="MSRP"
        />
        <TextInput
          value={form.urlImage}
          onChangeText={value => setForm('urlImage', value)}
          title="Image Url"
        />
        <Text style={styles.textTitle}>Body & Dimensions</Text>
        <TextInput
          value={form.bodyType}
          onChangeText={value => setForm('bodyType', value)}
          title="Body Type"
        />
        <TextInput
          value={form.doors}
          onChangeText={value => setForm('doors', value)}
          title="Doors"
        />
        <TextInput
          value={form.capacity}
          onChangeText={value => setForm('capacity', value)}
          title="Riding Capacity"
        />
        <TextInput
          value={form.modelCode}
          onChangeText={value => setForm('modelCode', value)}
          title="Model Code"
        />
        <TextInput
          value={form.bdLength}
          onChangeText={value => setForm('bdLength', value)}
          title="Overall Length (mm)"
        />
        <TextInput
          value={form.bdWidth}
          onChangeText={value => setForm('bdWidth', value)}
          title="Overall Width (mm)"
        />
        <TextInput
          value={form.bdHeigth}
          onChangeText={value => setForm('bdHeigth', value)}
          title="Overall Height (mm)"
        />
        <TextInput
          value={form.wheelBase}
          onChangeText={value => setForm('wheelBase', value)}
          title="Wheel Base (mm)"
        />
        <TextInput
          value={form.threadFront}
          onChangeText={value => setForm('threadFront', value)}
          title="Tread Front (mm)"
        />
        <TextInput
          value={form.threadRear}
          onChangeText={value => setForm('threadRear', value)}
          title="Tread Rear (mm)"
        />
        <TextInput
          value={form.bdInteriorLength}
          onChangeText={value => setForm('bdInteriorLength', value)}
          title="Interior Length (mm)"
        />
        <TextInput
          value={form.bdInteriorWidth}
          onChangeText={value => setForm('bdInteriorWidth', value)}
          title="Interior Width (mm)"
        />
        <TextInput
          value={form.bdInteriorHeigth}
          onChangeText={value => setForm('bdInteriorHeigth', value)}
          title="Interior Height (mm)"
        />
        <TextInput
          value={form.bdWeigth}
          onChangeText={value => setForm('bdWeigth', value)}
          title="Weight (kg)"
        />
        <Text style={styles.textTitle}>Engine</Text>
        <TextInput
          value={form.engineModel}
          onChangeText={value => setForm('engineModel', value)}
          title="Engine Model"
        />
        <TextInput
          value={form.cylinder}
          onChangeText={value => setForm('cylinder', value)}
          title="Cylinders"
        />
        <TextInput
          value={form.maxPowerPS}
          onChangeText={value => setForm('maxPowerPS', value)}
          title="Maximum Power (ps)"
        />
        <TextInput
          value={form.maxPowerKW}
          onChangeText={value => setForm('maxPowerKW', value)}
          title="Maximum Power (kW)"
        />
        <TextInput
          value={form.maxPowerRPM}
          onChangeText={value => setForm('maxPowerRPM', value)}
          title="Maximum Power (rpm)"
        />
        <TextInput
          value={form.maxTorqueKGM}
          onChangeText={value => setForm('maxTorqueKGM', value)}
          title="Maximum Torque (kgm)"
        />
        <TextInput
          value={form.maxTorqueNM}
          onChangeText={value => setForm('maxTorqueNM', value)}
          title="Maximum Torque (Nm)"
        />
        <TextInput
          value={form.maxTorqueRPM}
          onChangeText={value => setForm('maxTorqueRPM', value)}
          title="Maximum Torque (rpm)"
        />
        <TextInput
          value={form.displacement}
          onChangeText={value => setForm('displacement', value)}
          title="Displacement (cc)"
        />
        <TextInput
          value={form.bore}
          onChangeText={value => setForm('bore', value)}
          title="Bore (mm)"
        />
        <TextInput
          value={form.stroke}
          onChangeText={value => setForm('stroke', value)}
          title="Stroke (mm)"
        />
        <TextInput
          value={form.ratioCompression}
          onChangeText={value => setForm('ratioCompression', value)}
          title="Compression Ratio"
        />
        <TextInput
          value={form.charger}
          onChangeText={value => setForm('charger', value)}
          title="Charger"
        />
        <TextInput
          value={form.fuelSupplyEquip}
          onChangeText={value => setForm('fuelSupplyEquip', value)}
          title="Fuel Supply Equipment"
        />
        <TextInput
          value={form.fuelTankEquip}
          onChangeText={value => setForm('fuelTankEquip', value)}
          title="Fuel Tank Equipment"
        />
        <TextInput
          value={form.fuelType}
          onChangeText={value => setForm('fuelType', value)}
          title="Fuel Type"
        />
        <Text style={styles.textTitle}>Drivetrain</Text>
        <TextInput
          value={form.steeringSystem}
          onChangeText={value => setForm('steeringSystem', value)}
          title="Steering System"
        />
        <TextInput
          value={form.minTurningRadius}
          onChangeText={value => setForm('minTurningRadius', value)}
          title="Minimum Turning Radius"
        />
        <TextInput
          value={form.frontSuspenseSystem}
          onChangeText={value => setForm('frontSuspenseSystem', value)}
          title="Suspension System (front)"
        />
        <TextInput
          value={form.rearSuspenseSystem}
          onChangeText={value => setForm('rearSuspenseSystem', value)}
          title="Suspension System (rear)"
        />
        <TextInput
          value={form.frontBrakeSystem}
          onChangeText={value => setForm('frontBrakeSystem', value)}
          title="Braking System (front)"
        />
        <TextInput
          value={form.rearBrakeSystem}
          onChangeText={value => setForm('rearBrakeSystem', value)}
          title="Braking System (rear)"
        />
        <TextInput
          value={form.frontTyreSize}
          onChangeText={value => setForm('frontTyreSize', value)}
          title="Tires Size (front)"
        />
        <TextInput
          value={form.rearTyreSize}
          onChangeText={value => setForm('rearTyreSize', value)}
          title="Tires Size (rear)"
        />
        <Text style={styles.textTitle}>Transmission</Text>
        <TextInput
          value={form.driveWheel}
          onChangeText={value => setForm('driveWheel', value)}
          title="Driving Wheel"
        />
        <TextInput
          value={form.transmission}
          onChangeText={value => setForm('transmission', value)}
          title="Transmission"
        />
        <TextInput
          value={form.lsd}
          onChangeText={value => setForm('lsd', value)}
          title="LSD"
        />
        <TextInput
          value={form.firstGear}
          onChangeText={value => setForm('firstGear', value)}
          title="1st Gear"
        />
        <TextInput
          value={form.secGear}
          onChangeText={value => setForm('secGear', value)}
          title="2nd Gear"
        />
        <TextInput
          value={form.thirdGear}
          onChangeText={value => setForm('thirdGear', value)}
          title="3rd Gear"
        />
        <TextInput
          value={form.fourthGear}
          onChangeText={value => setForm('fourthGear', value)}
          title="4th Gear"
        />
        <TextInput
          value={form.fifthGear}
          onChangeText={value => setForm('fifthGear', value)}
          title="5th Gear"
        />
        <TextInput
          value={form.finalDriveGearRatio}
          onChangeText={value => setForm('finalDriveGearRatio', value)}
          title="Final Drive Gear Ratio"
        />
        <View style={{marginTop: 8}}>
          <TouchableOpacity onPress={onSubmit} activeOpacity={0.7}>
            <View
              style={{
                backgroundColor: color.primary,
                padding: 12,
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: color.white, fontFamily: font.medium}}>
                Add
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddCarScreen;

const styles = StyleSheet.create({
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
    paddingVertical: 32,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    flex: 1,
  },
  textTitle: {
    color: color.secondary,
    fontFamily: font.medium,
    fontSize: 20,
    marginBottom: 8,
    marginTop: 16,
  },
});
