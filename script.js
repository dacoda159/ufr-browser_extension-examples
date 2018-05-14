
var functions = {};

functions ["ReaderOpen"] = "";
functions ["ReaderOpenEx"] = "reader_type port_name port_interface";
functions ["ReaderOpenByType"] = "reader_type";
functions ["ReaderReset"] = "";
functions ["ReaderClose"] = "";
functions ["GetReaderType"] = "lpulReaderTypeMod";
functions ["GetReaderSerialNumber"] = "lpulSerialNumberMod";
functions ["GetBuildNumber"] = "buildNumberMod";
functions ["GetReaderFirmwareVersion"] = "version_majorMod version_minorMod";
functions ["GetReaderHardwareVersion"] = "version_majorMod version_minorMod";
functions ["GetReaderSerialDescription"] = "pSerialDescriptionMod";
functions ["ChangeReaderPassword"] = "oldPass newPass";
functions ["ReaderKeyWrite"] = "aucKey index";
functions ["ReaderKeysLock"] = "password";
functions ["ReaderKeysUnlock"] = "password";
functions ["ReaderSoftRestart"] = "";
functions ["ReadUserData"] = "aucDataMod";
functions ["WriteUserData"] = "aucData";
functions ["UfrEnterSleepMode"] = "";
functions ["UfrLeaveSleepMode"] = "";
functions ["AutoSleepSet"] = "wait";
functions ["AutoSleepGet"] = "seconds_waitMod";
functions ["SetSpeedPermanently"] = "tx rx";
functions ["GetSpeedParameters"] = "tx_speedMod rx_speedMod";
functions ["SetAsyncCardIdSendConfig"] = "sendEnable prefixEnable prefix suffix sendRemovedEnable baudRate";
functions ["GetAsyncCardIdSendConfig"] = "send_enableMod prefix_enableMod prefixMod suffixMod send_removed_enableMod async_baud_rateMod";
functions ["SetAsyncCardIdSendConfigEx"] = "sendEnable prefixEnable prefix suffix sendRemovedEnable reverseByteOrder decimalRepresentation baudRate";
functions ["GetAsyncCardIdSendConfigEx"] = "send_enableMod prefix_enableMod prefixMod suffixMod send_removed_enableMod reserve_byte_orderMod decimal_representationMod async_baud_rateMod";
functions ["ReaderUISignal"] = "light beep";
functions ["UfrRedLightControl"] = "control";
functions ["SetSpeakerFrequency"] = "frequency";
functions ["GetDllVersionStr"] = "";
functions ["GetReaderDescription"] = "";
functions ["GetDlogicCardType"] = "lpucCardTypeMod";
functions ["GetCardId"] = "lpucCardType lpucCardSerial";
functions ["GetCardIdEx"] = "lpucSakMod aucUidMod lpucUidSizeMod";
functions ["GetLastCardIdEx"] = "lpucSakMod aucUidMod lpucUidSizeMod";
functions ["BlockRead"] = "dataMod blockAdress authMode keyIndex";
functions ["BlockRead_AKM1"] = "dataMod blockAdress authMode";
functions ["BlockRead_AKM2"] = "dataMod blockAdress authMode";
functions ["BlockRead_PK"] = "dataMod blockAdress authMode key";
functions ["BlockWrite"] = "data blockAdress authMode keyIndex";
functions ["BlockWrite_AKM1"] = "data blockAdress authMode";
functions ["BlockWrite_AKM2"] = "data blockAdress authMode";
functions ["BlockWrite_PK"] = "data blockAdress auhtMode key";
functions ["BlockInSectorRead"] = "dataMod sectorAdress blockAdress authMode keyIndex";
functions ["BlockInSectorRead_AKM1"] = "dataMod sectorAdress blockAdress authMode";
functions ["BlockInSectorRead_AKM2"] = "dataMod sectorAdress blockAdress authMode";
functions ["BlockInSectorRead_PK"] = "dataMod sectorAdress blockAdress authMode key";
functions ["BlockInSectorWrite"] = "data sectorAdress blockAdress authMode keyIndex";
functions ["BlockInSectorWrite_AKM1"] = "data sectorAdress blockAdress authMode";
functions ["BlockInSectorWrite_AKM2"] = "data sectorAdress blockAdress authMode";
functions ["BlockInSectorWrite_PK"] = "data sectorAdress blockAdress authMode key";
functions ["LinearRead"] = "dataMod linearAdress length bytes_returnedMod authMode keyIndex";
functions ["LinearRead_AKM1"] = "dataMod linearAdress length bytes_returnedMod authMode";
functions ["LinearRead_AKM2"] = "dataMod linearAdress length bytes_returnedMod authMode";
functions ["LinearRead_PK"] = "dataMod linearAdress length bytes_returnedMod authMode key";
functions ["LinearWrite"] = "data linearAdress length bytes_returnedMod authMode keyIndex";
functions ["LinearWrite_AKM1"] = "data linearAdress length bytes_returnedMod authMode";
functions ["LinearWrite_AKM2"] = "data linearAdress length bytes_returnedMod authMode";
functions ["LinearWrite_PK"] = "data linearAdress length bytes_returnedMod authMode key";
functions ["LinRowRead"] = "dataMod linRowAdress length bytes_returnedMod authMode keyIndex";
functions ["LinRowRead_AKM1"] = "dataMod linRowAdress length bytes_returnedMod authMode";
functions ["LinRowRead_AKM2"] = "dataMod linRowAdress length bytes_returnedMod authMode";
functions ["LinRowRead_PK"] = "dataMod linRowAdress length bytes_returnedMod authMode key";
functions ["LinearFormatCard"] = "newKeyA blockAccessBits sectorTrailAccessBits sectorTrailAccessByte newKeyB lpucSectorsFormattedMod authMode keyIndex";
functions ["LinearFormatCard_AKM1"] = "newKeyA blockAccessBits sectorTrailAccessBits sectorTrailAccessByte newKeyB lpucSectorsFormattedMod authMode";
functions ["LinearFormatCard_AKM2"] = "newKeyA blockAccessBits sectorTrailAccessBits sectorTrailAccessByte newKeyB lpucSectorsFormattedMod authMode";
functions ["LinearFormatCard_PK"] = "newKeyA blockAccessBits sectorTrailAccessBits sectorTrailAccessByte newKeyB lpucSectorsFormattedMod authMode key";
functions ["GetCardSize"] = "lpulLinearSizeMod lpulRawSizeMod";
functions ["SectorTrailerWrite"] = "adressMode adress newKeyA block0 block1 block2 sectorTrailAccessBits sectorTrailAccessByte newKeyB authMode keyIndex";
functions ["SectorTrailerWrite_AKM1"] = "adressMode adress newKeyA block0 block1 block2 sectorTrailAccessBits sectorTrailAccessByte newKeyB authMode";
functions ["SectorTrailerWrite_AKM2"] = "adressMode adress newKeyA block0 block1 block2 sectorTrailAccessBits sectorTrailAccessByte newKeyB authMode";
functions ["SectorTrailerWrite_PK"] = "adressMode adress newKeyA block0 block1 block2 sectorTrailAccessBits sectorTrailAccessByte newKeyB authMode key";
functions ["SectorTrailerWriteUnsafe"] = "adressMode adress sectorTrailer authMode keyIndex";
functions ["SectorTrailerWriteUnsafe_AKM1"] = "adressMode adress sectorTrailer authMode";
functions ["SectorTrailerWriteUnsafe_AKM2"] = "adressMode adress sectorTrailer authMode";
functions ["SectorTrailerWriteUnsafe_PK"] = "adressMode adress sectorTrailer authMode key";
functions ["ValueBlockRead"] = "valueMod value_addrMod blockAdress authMode keyIndex";
functions ["ValueBlockRead_AKM1"] = "valueMod value_addrMod blockAdress authMode";
functions ["ValueBlockRead_AKM2"] = "valueMod value_addrMod blockAdress authMode";
functions ["ValueBlockRead_PK"] = "valueMod value_addrMod blockAdress authMode key";
functions ["ValueBlockWrite"] = "value valueAddress blockAdress authMode keyIndex";
functions ["ValueBlockWrite_AKM1"] = "value valueAddress blockAdress authMode";
functions ["ValueBlockWrite_AKM2"] = "value valueAddress blockAdress authMode";
functions ["ValueBlockWrite_PK"] = "value valueAddress blockAdress authMode key";
functions ["ValueBlockInSectorRead"] = "valueMod value_addrMod sectorAdress blockAdress authMode keyIndex";
functions ["ValueBlockInSectorRead_AKM1"] = "valueMod value_addrMod sectorAdress blockAdress authMode";
functions ["ValueBlockInSectorRead_AKM2"] = "valueMod value_addrMod sectorAdress blockAdress authMode";
functions ["ValueBlockInSectorRead_PK"] = "valueMod value_addrMod sectorAdress blockAdress authMode key";
functions ["ValueBlockInSectorWrite"] = "value valueAddress sectorAdress blockAdress authMode keyIndex";
functions ["ValueBlockInSectorWrite_AKM1"] = "value valueAddress sectorAdress blockAdress authMode";
functions ["ValueBlockInSectorWrite_AKM2"] = "value valueAddress sectorAdress blockAdress authMode";
functions ["ValueBlockInSectorWrite_PK"] = "value valueAddress sectorAdress blockAdress authMode key";
functions ["ValueBlockIncrement"] = "incrementValue blockAdress authMode keyIndex";
functions ["ValueBlockIncrement_AKM1"] = "incrementValue blockAdress authMode";
functions ["ValueBlockIncrement_AKM2"] = "incrementValue blockAdress authMode";
functions ["ValueBlockIncrement_PK"] = "incrementValue blockAdress authMode key";
functions ["ValueBlockDecrement"] = "decrementValue blockAdress authMode keyIndex";
functions ["ValueBlockDecrement_AKM1"] = "decrementValue blockAdress authMode";
functions ["ValueBlockDecrement_AKM2"] = "decrementValue blockAdress authMode";
functions ["ValueBlockDecrement_PK"] = "decrementValue blockAdress authMode key";
functions ["ValueBlockInSectorIncrement"] = "incrementValue sectorAdress blockAdress authMode keyIndex";
functions ["ValueBlockInSectorIncrement_AKM1"] = "incrementValue sectorAdress blockAdress authMode";
functions ["ValueBlockInSectorIncrement_AKM2"] = "incrementValue sectorAdress blockAdress authMode";
functions ["ValueBlockInSectorIncrement_PK"] = "incrementValue sectorAdress blockAdress authMode key";
functions ["ValueBlockInSectorDecrement"] = "decrementValue sectorAdress blockAdress authMode keyIndex";
functions ["ValueBlockInSectorDecrement_AKM1"] = "decrementValue sectorAdress blockAdress authMode";
functions ["ValueBlockInSectorDecrement_AKM2"] = "decrementValue sectorAdress blockAdress authMode";
functions ["ValueBlockInSectorDecrement_PK"] = "decrementValue sectorAdress blockAdress authMode key";
functions ["get_ndef_record_count"] = "ndef_message_cntMod ndef_record_cntMod ndef_record_arrayMod empty_ndef_message_cntMod";
functions ["read_ndef_record"] = "message_nr record_nr tnfMod type_recordMod type_lengthMod idMod ";
functions ["write_ndef_record"] = "message_nr tnf type_record type_length id ";
functions ["write_ndef_record_mirroring"] = "message_nr tnf type_record type_length id id_length payload payload_length card_formatedMod use_uid_ascii_mirror use_counter_ascii_mirror payload_mirroring_pos";
functions ["erase_last_ndef_record"] = "message_nr";
functions ["erase_all_ndef_records"] = "message_nr";
functions ["ndef_card_initialization"] = "";
functions ["GetReaderTime"] = "timeMod";
functions ["SetReaderTime"] = "password time";
functions ["ReaderEepromRead"] = "dataMod address size";
functions ["ReaderEepromWrite"] = "data address size password";
functions ["uFR_int_WriteAesKey"] = "aes_key_no aes_key";
functions ["uFR_int_GetDesfireUid"] = "aes_key_nr aid aid_key_nr card_uidMod card_uid_lenMod card_statusMod exec_timeMod";
functions ["uFR_int_GetDesfireUid_PK"] = "aes_key_ext aid aid_key_nr card_uidMod card_uid_lenMod card_statusMod exec_timeMod";
functions ["uFR_int_DesfireFreeMem"] = "free_mem_byteMod card_statusMod exec_timeMod";
functions ["uFR_int_DesfireFormatCard"] = "aes_key_nr card_statusMod exec_timeMod";
functions ["uFR_int_DesfireFormatCard_PK"] = "aes_key_ext card_statusMod exec_timeMod";
functions ["uFR_int_DesfireSetConfiguration"] = "aes_key_nr random_uid format_disable card_statusMod exec_timeMod";
functions ["uFR_int_DesfireSetConfiguration_PK"] = "aes_key_ext random_uid format_disable card_statusMod exec_timeMod";
functions ["uFR_int_DesfireChangeKeySettings"] = "aes_key_nr aid settings card_statusMod exec_timeMod";
functions ["uFR_int_DesfireChangeKeySettings_PK"] = "aes_key_ext aid settings card_statusMod exec_timeMod";
functions ["uFR_int_DesfireCreateAesApplication"] = "aes_key_nr aid_nr setting max_key_no card_statusMod exec_timeMod";
functions ["uFR_int_DesfireCreateAesApplication_PK"] = "aes_key_ext aid_nr setting max_key_no card_statusMod exec_timeMod";
functions ["uFR_int_DesfireCreateAesApplication_no_auth"] = "aid_nr setting max_key_no card_statusMod exec_timeMod";
functions ["uFR_int_DesfireGetKeySettings"] = "aes_key_nr_ aid_ settingMod card_statusMod exec_timeMod";
functions ["uFR_int_DesfireGetKeySettings_PK"] = "aes_key_ext_ aid_ settingMod card_statusMod exec_timeMod";
functions ["uFR_int_DesfireChangeAesKey"] = "aes_key_nr_ aid_ aid_key_no_auth_ new_aes_key_ aid_key_no_ old_aes_key_ card_statusMod exec_timeMod";
functions ["uFR_int_DesfireChangeAesKey_PK"] = "aes_key_ext_ aid_ aid_key_no_auth_ new_aes_key_ aid_key_no_ old_aes_key_ card_statusMod exec_timeMod";
functions ["uFR_int_DesfireChangeAesKey_A"] = "aes_key_nr_ aid_ aid_key_no_auth_ new_aes_key_nr_ aid_key_no_ old_aes_key_nr_ card_statusMod exec_timeMod";
functions ["uFR_int_DesfireCreateValueFile"] = "aes_key_nr aid file_id lower_limit upper_limit value limited_credit_enabled read_key_no write_key_no read_write_key_no change_key_no communication_settings card_statusMod exec_timeMod";
functions ["uFR_int_DesfireCreateValueFile_PK"] = "aes_key_ext aid file_id lower_limit upper_limit value limited_credit_enabled read_key_no write_key_no read_write_key_no change_key_no communication_settings card_statusMod exec_timeMod";
functions ["uFR_int_DesfireCreateValueFile_no_auth"] = "aid file_id lower_limit upper_limit value limited_credit_enabled read_key_no write_key_no read_write_key_no change_key_no communication_settings card_statusMod exec_timeMod";
functions ["uFR_int_DesfireIncreaseValueFile"] = "aes_key_nr aid aid_key_nr file_id communication_settings value card_statusMod exec_timeMod";
functions ["uFR_int_DesfireIncreaseValueFile_PK"] = "aes_key_ext aid aid_key_nr file_id communication_settings value card_statusMod exec_timeMod";
functions ["uFR_int_DesfireIncreaseValueFile_no_auth"] = "aid aid_key_nr file_id communication_settings value card_statusMod exec_timeMod";
functions ["ReadECCSignature"] = "lpucECCSignatureMod lpucUidMod lpucUidLenMod lpucDlogicCardTypeMod";
functions ["uFR_int_DesfireDeleteApplication"] = "aes_key_nr_ aid_ card_statusMod exec_timeMod";
functions ["uFR_int_DesfireDeleteApplication_PK"] = "aes_key_ext_ aid_ card_statusMod exec_timeMod";
functions ["uFR_int_DesfireCreateStdDataFile"] = "aes_key_nr_ aid_ file_id_ file_size_ read_key_no_ write_key_no_ read_write_key_no_ change_key_no_ communication_settings_ card_statusMod exec_timeMod";
functions ["uFR_int_DesfireCreateStdDataFile_PK"] = "aes_key_ext_ aid_ file_id_ file_size_ read_key_no_ write_key_no_ read_write_key_no_ change_key_no_ communication_settings_ card_statusMod exec_timeMod";
functions ["uFR_int_DesfireCreateStdDataFile_no_auth"] = "aid_ file_id_ file_size_ read_key_no_ write_key_no_ read_write_key_no_ change_key_no_ communication_settings_ card_statusMod exec_timeMod";
functions ["uFR_int_DesfireDeleteFile"] = "aes_key_nr_ aid_ file_id_ card_statusMod exec_timeMod";
functions ["uFR_int_DesfireDeleteFile_PK"] = "aes_key_ext_ aid_ file_id_ card_statusMod exec_timeMod";
functions ["uFR_int_DesfireDeleteFile_no_auth"] = "aid_ file_id_ card_statusMod exec_timeMod";
functions ["uFR_int_DesfireReadStdDataFile"] = "aes_key_nr_ aid_ aid_key_nr_ file_id_ offset_ data_length_ communication_settings_ dataMod card_statusMod exec_timeMod";
functions ["uFR_int_DesfireReadStdDataFile_PK"] = "aes_key_ext_ aid_ aid_key_nr_ file_id_ offset_ data_length_ communication_settings_ dataMod card_statusMod exec_timeMod";
functions ["uFR_int_DesfireReadStdDataFile_no_auth"] = "aid_ aid_key_nr_ file_id_ offset_ data_length_ communication_settings_ dataMod card_statusMod exec_timeMod";
functions ["uFR_int_DesfireWriteStdDataFile"] = "aes_key_nr_ aid_ aid_key_nr_ file_id_ offset_ data_length_ communication_settings_ data_ card_statusMod exec_timeMod";
functions ["uFR_int_DesfireWriteStdDataFile_PK"] = "aes_key_ext_ aid_ aid_key_nr_ file_id_ offset_ data_length_ communication_settings_ data_ card_statusMod exec_timeMod";
functions ["uFR_int_DesfireWriteStdDataFile_no_auth"] = "aid_ aid_key_nr_ file_id_ offset_ data_length_ communication_settings_ data_ card_statusMod exec_timeMod";
functions ["uFR_int_DesfireReadValueFile"] = "aes_key_nr_ aid_ aid_key_nr_ file_id_ communication_settings_ valueMod card_statusMod exec_timeMod";
functions ["uFR_int_DesfireReadValueFile_PK"] = "aes_key_ext_ aid_ aid_key_nr_ file_id_ communication_settings_ valueMod card_statusMod exec_timeMod";
functions ["uFR_int_DesfireReadValueFile_no_auth"] = "aid_ aid_key_nr_ file_id_ communication_settings_ valueMod card_statusMod exec_timeMod";
functions ["uFR_int_DesfireDecreaseValueFile_no_auth"] = "aid_ aid_key_nr_ file_id_ communication_settings_ value_ card_statusMod exec_timeMod";
functions ["uFR_int_DesfireDecreaseValueFile_PK"] = "aes_key_ext_ aid_ aid_key_nr_ file_id_ communication_settings_ value_ card_statusMod exec_timeMod";
functions ["uFR_int_DesfireDecreaseValueFile"] = "aes_key_nr_ aid_ aid_key_nr_ file_id_ communication_settings_ value_ card_statusMod exec_timeMod";
functions ["ReadCounter"] = "counter_address valueMod";
functions ["IncrementCounter"] = "counter_address inc_value";
functions ["ReadNFCCounter"] = "valueMod";
functions ["ReadNFCCounterPwdAuth_RK"] = "valueMod reader_key_index";
functions ["ReadNFCCounterPwdAuth_PK"] = "valueMod key";
functions ["UfrSetBadSelectCardNrMax"] = "bad_select_nr_max";
functions ["UfrGetBadSelectCardNrMax"] = "bad_select_nr_maxMod";
functions ["WriteEmulationNdef"] = "tnf type_record type_length id id_length payload payload_length";
functions ["WriteEmulationNdefWithAAR"] = "tnf type_record type_length id id_length payload payload_length aar aar_length";
functions ["TagEmulationStart"] = "";
functions ["TagEmulationStop"] = "";
functions ["SetDisplayData"] = "data data_length";
functions ["EnterShareRamCommMode"] = "";
functions ["ExitShareRamCommMode"] = "";
functions ["WriteShareRam"] = "ram_data addr data_len";
functions ["ReadShareRam"] = "ram_dataMod addr data_len";
functions ["AdHocEmulationStart"] = "";
functions ["AdHocEmulationStop"] = "";
functions ["GetExternalFieldState"] = "is_field_presentMod";
functions ["GetAdHocEmulationParams"] = "ThresholdMinLevelMod ThresholdCollLevelMod RFLevelAmpMod RxGainMod RFLevelMod";
functions ["SetAdHocEmulationParams"] = "TresholdMinLevel TresholdCollLevel RFLevelAmp RxGain RFLevel";
functions ["CombinedModeEmulationStart"] = "";
functions ["r_block_transceive"] = "ack timeout rcv_lengthMod rcv_data_arrayMod rcv_chainedMod ufr_statusMod";
functions ["s_block_deselect"] = "timeout";
functions ["SetISO14443_4_Mode"] = "";
functions ["UfrXrcLockOn"] = "pulse_duration";
functions ["UfrXrcRelayState"] = "state";
functions ["UfrXrcGetIoState"] = "intercomMod doorMod relay_stateMod";
functions ["SetRfAnalogRegistersTypeA"] = "TresholdMinLevel TresholdCollLevel RFLevelAmp RxGain RFLevel";
functions ["SetRfAnalogRegistersTypeB"] = "TresholdMinLevel TresholdCollLevel RFLevelAmp RxGain RFLevel";
functions ["SetRfAnalogRegistersISO14443_212"] = "TresholdMinLevel TresholdCollLevel RFLevelAmp RxGain RFLevel";
functions ["SetRfAnalogRegistersISO14443_424"] = "TresholdMinLevel TresholdCollLevel RFLevelAmp RxGain RFLevel";
functions ["SetRfAnalogRegistersISO14443_424Default"] = "";
functions ["SetRfAnalogRegistersISO14443_212Default"] = "";
functions ["SetRfAnalogRegistersTypeBDefault"] = "";
functions ["SetRfAnalogRegistersTypeADefault"] = "";
functions ["GetRfAnalogRegistersISO14443_424"] = "ThresholdMinLevelMod ThresholdCollLevelMod RFLevelAmpMod RxGainMod RFLevelMod";
functions ["GetRfAnalogRegistersISO14443_212"] = "ThresholdMinLevelMod ThresholdCollLevelMod RFLevelAmpMod RxGainMod RFLevelMod";
functions ["GetRfAnalogRegistersTypeB"] = "ThresholdMinLevelMod ThresholdCollLevelMod RFLevelAmpMod RxGainMod RFLevelMod";
functions ["GetRfAnalogRegistersTypeA"] = "ThresholdMinLevelMod ThresholdCollLevelMod RFLevelAmpMod RxGainMod RFLevelMod";
functions ["SetRfAnalogRegistersTypeATrans"] = "TresholdMinLevel TresholdCollLevel RFLevelAmp RxGain RFLevel CWGsNOn ModGsNOn CWGsP CWGsNOff ModGsNOff";
functions ["SetRfAnalogRegistersTypeBTrans"] = "TresholdMinLevel TresholdCollLevel RFLevelAmp RxGain RFLevel CWGsNOn ModGsNOn CWGsP ModGsP";
functions ["GetRfAnalogRegistersTypeBTrans"] = "TresholdMinLevelMod TresholdCollLevelMod RFLevelAmpMod RxGainMod RFLevelMod CWGsNOnMod ModGsNOnMod CWGsPMod ModGsPMod";
functions ["GetRfAnalogRegistersTypeATrans"] = "TresholdMinLevelMod TresholdCollLevelMod RFLevelAmpMod RxGainMod RFLevelMod CWGsNOnMod ModGsNOnMod CWGsPMod CWGsNOffMod ModGsNOffMod";
functions ["GreenLedBlinkingTurnOff"] = "";
functions ["GreenLedBlinkingTurnOn"] = "";
functions ["SetDisplayIntensity"] = "intensity";
functions ["GetDisplayIntensity"] = "intensityMod";
functions ["uart_transceive"] = "send_data_ send_len_ rcv_dataMod bytes_to_receive_ rcv_lenMod";
functions ["card_transceive_mode_stop"] = "";
functions ["card_transceive_mode_start"] = "tx_crc_ rx_crc_ rf_timeout_ uart_timeout";
functions ["ReaderStillConnected"] = "connectedMod";
functions ["GetNfcT2TVersion"] = "lpucVersionResponseMod";
functions ["SetOutput"] = "output";

function load() {

    var options = '';
    for (var key in functions) {
        options += '<option value="'+key+'" />';

    }

    document.getElementById("functions").innerHTML = options;
}

function onenter(event) {
	event.preventDefault();
    if (event.which == 13 || event.keyCode === 13) {
        onclickbutton();
    }
}

function change(event) {
    var input = document.getElementById("lista").value;
    input = input.replace(/\s\s+/g, ' ');
    var result = functions[input.trim().split(" ")[0]];

    if(result == undefined)
    {
        document.getElementById("arguments").innerHTML = "Unknown command";
    }
    else if(result=="")
    {
        document.getElementById("arguments").innerHTML = "No arguments required";
    }
    else
    {
        var r = result.split(" ");
        var out = "";
        var i;
        var sp = input.split(" ");

        for (i = 0; i < r.length; i++) {
            if(r[i].endsWith("Mod"))
            {
                if(i == sp.length-2)
                {
                    out+= "<u><k>" + r[i].replace("Mod", "") + "</k></u>" + "&nbsp;&nbsp;&nbsp;";
                }
                else
                {
                    out+= "<k>" + r[i].replace("Mod", "") + "</k>" + "&nbsp;&nbsp;&nbsp;";

                }
            }
            else
            {
                if(i == sp.length-2)
                {
                    out +="<u>" +  r[i] + "</u>&nbsp;&nbsp;&nbsp;";

                }
                else {
                    out += r[i] + "&nbsp;&nbsp;&nbsp;";

                }
           }

        }
        document.getElementById("arguments").innerHTML = out;
    }



}

function onclickbutton() {

	var input = document.getElementById("lista").value;

    ufRequest(input, function () {
		
		
        var output = ufResponse();

        var print = '';

        for (var key in output) {

            var o = output[key];
            print += key + " : <b>" + o.replace(/\/\//g, "/") + "</b></br></br>";

        }
		document.getElementById("response").innerHTML= print;

    });



}
