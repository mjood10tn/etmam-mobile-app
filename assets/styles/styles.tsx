import { StyleSheet, Platform } from "react-native"

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  header: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F59E0B',
    padding: 16,
    borderBottomWidth: 3,
    borderBottomColor: '#F59E0B',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#fff',
  },
  headerTitleEtmam: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Inter_900Black',
  },
  logoutButton: {
    padding: 8,
  },
  scrollView: {
    padding: 16,
  },
  userCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'left',
  },
  userDetail: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'left',
  },
  actionStripe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    width: 110,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  attendanceCard: {

    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  attendanceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',

    textAlign: 'left',
  },
  attendanceHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 8,
  },
  dayColumn: {
    width: 80,
    alignItems: 'center',

  },

  dayText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4B5563',

  },
  dayTextActive: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4d4b63 ',
    borderBottomWidth: 1,
    borderBottomColor: '#F59E0B',
  },
  attendanceBody: {
    flexDirection: 'row',
    marginTop: 8,
  },
  scrollContent: {
    flexDirection: 'row',
  },
  punchCell: {
    alignItems: 'center',
    marginVertical: 4,
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 6,
  },
  punchTime: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',

  },
  infoSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
    textAlign: 'right',
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    justifyContent: 'flex-end',
  },
  infoText: {
    fontSize: 14,
    color: '#4B5563',
    marginRight: 12,
    textAlign: 'right',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 50,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  modalText: {
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 16,
    color: '#1F2937',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    borderRadius: 8,
    padding: 12,
    minWidth: 100,
  },
  buttonConfirm: {
    backgroundColor: '#10B981',
  },
  buttonCancel: {
    backgroundColor: '#EF4444',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 20,

  },
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
  blue: {
    color: '#3a88f0',
  },
  closeModal: {
    position: 'absolute',
    top: 6,
    left: 6,
    padding: 6,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  reloadBtn: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: '#F59E0B',
  },
  logoapp: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 10,

    // marginLeft: 1,
    color: '#fff',

  }
});
export default style;