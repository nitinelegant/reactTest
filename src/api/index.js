import { gql } from "apollo-boost";
// for login and authentication

export const baseUrl = "http://seo.srcservicesltd.com:5000";
//export const baseUrl = "http://192.168.0.9:5000"; // need to change as per ip dependent
export const GET_Login_Details = gql`
  mutation LogIn($loginid: String!, $password: String!) {
    login(loginid: $loginid, password: $password) {
      login_id
      tokenid
      message
      usertype
      userid
      organization_id
      institution_id
      first_name
      middle_name
      last_name
      institution_name
      currency_code
      currency_symbol
      language
      country_code
      locale
      full_day_hours
      half_day_hours
    }
  }
`;

// create or update institution
export const Create_Update_Institution = gql`
  mutation AddInstitution(
    $name: String!
    $organization_id: Int!
    $phone_number: String!
    $email_address: String!
    $home_url: String!
    $state: String!
    $country: String!
    $line1: String!
    $line2: String!
    $city: String!
    $zip_code: Int!
    $icon_doc: icon_doc
  ) {
    addInstitution(
      line1: $line1
      line2: $line2
      city: $city
      state: $state
      zip_code: $zip_code
      country: $country
      name: $name
      organization_id: $organization_id
      phone_number: $phone_number
      email_address: $email_address
      home_url: $home_url
      icon_doc: $icon_doc
    ) {
      message
      id
    }
  }
`;

// // create or update institution
// export const Create_Update_Institution = gql`
//   mutation AddInstitution(
//     $name: String!
//     $organization_icon_id: Int!
//     $organization_name: String!
//     $phone_number: String!
//     $email_address: String!
//     $home_url: String!
//     $icon_id: String!
//     $state: String!
//     $country: String!
//     $line1: String!
//     $line2: String!
//     $city: String!
//     $zip_code: Int!
//   ) {
//     addInstitution(
//       line1: $line1
//       line2: $line2
//       city: $city
//       state: $state
//       zip_code: $zip_code
//       country: $country
//       name: $name
//       organization_name: $organization_name
//       organization_icon_id: $organization_icon_id
//       phone_number: $phone_number
//       email_address: $email_address
//       home_url: $home_url
//       icon_id: $icon_id
//     ) {
//       message
//       id
//     }
//   }
// `;

export const GET_Admin_Details = gql`
  query GetAdmin($name_id: Int!) {
    getAdmin(name_id: $name_id) {
      id
      organization_id
      access_level
      name_id
      status
      create_time
      update_time
    }
  }
`;

// to get institution details
export const GET_Institution_Details = gql`
  query Institutions($organization_id: Int!) {
    institutions(organization_id: $organization_id) {
      id
      name
      phone_number
      email_address
      home_url
      address {
        line1
        line2
        city
        state
        zip_code
        country
      }
      document {
        name
        type
        reference_id
        doc_reference_schema
        path
        filename
      }
    }
  }
`;

//  update institution single
export const Update_Institution = gql`
  mutation UpdateInstitution(
    $id: Int!
    $name: String!
    $organization_id: Int!
    $phone_number: String!
    $email_address: String!
    $home_url: String!
    $state: String!
    $country: String!
    $line1: String!
    $line2: String!
    $city: String!
    $zip_code: Int!
    $icon_doc: icon_doc
  ) {
    updateInstitution(
      id: $id
      line1: $line1
      line2: $line2
      city: $city
      state: $state
      zip_code: $zip_code
      country: $country
      name: $name
      organization_id: $organization_id
      phone_number: $phone_number
      email_address: $email_address
      home_url: $home_url
      icon_doc: $icon_doc
    ) {
      message
    }
  }
`;

// create manage Department
export const Create_Manage_Department = gql`
  mutation AddDepartment($institution_id: Int!, $name: String) {
    addDepartment(
      institution_id: $institution_id

      name: $name
    ) {
      message
      id
    }
  }
`;
// delete  department single one
export const Delete_Manage_Department = gql`
  mutation DeleteDepartment($id: Int!) {
    deleteDepartment(id: $id) {
      message
    }
  }
`;
// edit  department single one
export const Edit_Manage_Department = gql`
  mutation UpdateDepartment($id: Int!, $name: String!) {
    updateDepartment(id: $id, name: $name) {
      message
    }
  }
`;

// to get Manage Session Data
export const Get_Academic_session = gql`
  query GetAcademicSession($institution_id: Int!) {
    getAcademicSession(institution_id: $institution_id) {
      id
      start_day
      end_day
      session_name
    }
  }
`;

// to get all Manage Session Data
export const GET_ALL_ACADEMIC_SESSION = gql`
  query GetAllAcademicSession($institution_id: Int!) {
    getAllAcademicSession(institution_id: $institution_id) {
      id
      start_day
      end_day
      is_current
      session_name
    }
  }
`;

// CREATE ACADEMIC SESSION
export const CREATE_ACADEMIC_SESSION = gql`
  mutation addAcademicSession(
    $institution_id: Int!
    $start_day: String!
    $end_day: String!
    $is_current: Int!
    $session_name: String!
  ) {
    addAcademicSession(
      institution_id: $institution_id
      start_day: $start_day
      end_day: $end_day
      is_current: $is_current
      session_name: $session_name
    ) {
      message
      id
    }
  }
`;

// delete  grade single one
export const Delete_Academic_Session = gql`
  mutation DeleteAcademicSession($id: Int!) {
    deleteAcademicSession(id: $id) {
      message
    }
  }
`;

// edit  academic session
export const Edit_Academic_sesssion = gql`
  mutation UpdateAcademicSession(
    $id: Int!
    $start_day: String!
    $end_day: String!
    $session_name: String!
    $is_current: Int!
    $institution_id: Int!
  ) {
    updateAcademicSession(
      id: $id
      start_day: $start_day
      end_day: $end_day
      session_name: $session_name
      is_current: $is_current
      institution_id: $institution_id
    ) {
      message
    }
  }
`;

// to get department data
export const Get_Department_Data = gql`
  query getDepartment($institution_id: Int!) {
    getDepartment(institution_id: $institution_id) {
      id
      name
    }
  }
`;

// to get  grade arr
export const Get_Manage_Grade = gql`
  query GetGrade($academic_session_id: Int!) {
    getGrade(academic_session_id: $academic_session_id) {
      id
      gradeName
    }
  }
`;
// add  grade single one
export const Add_Grade = gql`
  mutation AddGrade($gradeName: String!, $academic_session_id: Int!) {
    addGrade(gradeName: $gradeName, academic_session_id: $academic_session_id) {
      id
      message
    }
  }
`;

// delete  grade single one
export const Delete_Grade = gql`
  mutation DeleteGrade($id: Int!) {
    deleteGrade(id: $id) {
      message
    }
  }
`;
// edit  manage grade single one
export const Edit_Manage_Grade = gql`
  mutation UpdateGrade($id: Int!, $gradeName: String!) {
    updateGrade(id: $id, gradeName: $gradeName) {
      message
    }
  }
`;

// to get manage subjects data
export const Get_Manage_Subject_Data = gql`
  query GetSubjects($institution_id: Int!) {
    getSubject(institution_id: $institution_id) {
      id
      name
    }
  }
`;

// create manage subject
export const Create_Manage_Subject = gql`
  mutation AddSubject($institution_id: Int!, $name: String) {
    addSubject(institution_id: $institution_id, name: $name) {
      message
      id
    }
  }
`;
// delete  manage subject single one
export const Delete_Manage_Subject = gql`
  mutation DeleteSubject($id: Int!) {
    deleteSubject(id: $id) {
      message
    }
  }
`;

// edit subject single one
export const Edit_Subject_Data = gql`
  mutation UpdateSubject($id: Int!, $name: String!, $institution_id: Int!) {
    updateSubject(id: $id, name: $name, institution_id: $institution_id) {
      message
    }
  }
`;

//get manage location data
export const Get_Manage_Location = gql`
  query GetLocation($institution_id: Int!) {
    getLocation(institution_id: $institution_id) {
      id
      name
      url
      mode
    }
  }
`;

// create manage location
export const Create_Location = gql`
  mutation AddLocation($institution_id: Int!, $name: String!, $mode: String!) {
    addLocation(institution_id: $institution_id, name: $name, mode: $mode) {
      message
      id
    }
  }
`;
// delete  location api
export const Delete_Location = gql`
  mutation DeleteLocation($id: Int!) {
    deleteLocation(id: $id) {
      message
    }
  }
`;
// edit location api
export const Edit_Location = gql`
  mutation updateLocation($id: Int!, $name: String!) {
    updateLocation(id: $id, name: $name) {
      message
    }
  }
`;

// to get  designation arr
// to get manage role data
export const Get_Designation_Data = gql`
  query GetDesignation($institution_id: Int!) {
    getDesignation(institution_id: $institution_id) {
      id
      name
    }
  }
`;

// delete  designation api
export const Delete_Designation = gql`
  mutation DeleteDesignation($id: Int!) {
    deleteDesignation(id: $id) {
      message
    }
  }
`;
// add  manage designation
export const Add_Manage_Designation = gql`
  mutation AddDesignation($institution_id: Int!, $name: String!) {
    addDesignation(institution_id: $institution_id, name: $name) {
      message
    }
  }
`;
// edit designation api
export const Edit_Designation_Data = gql`
  mutation UpdateDesignation($id: Int!, $role_name: String!) {
    updateDesignation(id: $id, role_name: $role_name) {
      message
    }
  }
`;

//get fee subtype data
export const Get_Fee_Subtype_data = gql`
  query GetFeeSubtype($institution_id: Int!) {
    getFeeSubtype(institution_id: $institution_id) {
      id
      name
      description
    }
  }
`;

// delet  fee sub type single one
export const Delete_FeesubType_Data = gql`
  mutation DeleteFeeSubtype($id: Int!) {
    deleteFeeSubtype(id: $id) {
      message
    }
  }
`;
// create feesubtype data
export const Create_FeesubType_Data = gql`
  mutation AddFeeSubtype(
    $institution_id: Int!
    $name: String!
    $description: String!
  ) {
    addFeeSubtype(
      institution_id: $institution_id
      name: $name
      description: $description
    ) {
      message
      id
    }
  }
`;
// edit  feesubtype single one
export const Edit_FeesubType_Data = gql`
  mutation UpdateFeeSubtype($id: Int!, $name: String!, $description: String!) {
    updateFeeSubtype(id: $id, name: $name, description: $description) {
      message
    }
  }
`;

export const GET_Section_Data = gql`
  query GetSectionAndGrade($grade_id: Int!) {
    getSectionAndGrade(grade_id: $grade_id) {
      id
      name
      grade {
        gradeName
      }
    }
  }
`;

// edit  section single one
export const Edit_Section_Data = gql`
  mutation UpdateSection($id: Int!, $name: String!) {
    updateSection(id: $id, name: $name) {
      message
    }
  }
`;

// delete  section
export const Delete_Section_Data = gql`
  mutation DeleteSection($id: Int!) {
    deleteSection(id: $id) {
      message
    }
  }
`;

// create section in manage class
export const Create_Section_Data = gql`
  mutation AddSection($grade_id: Int!, $name: String!) {
    addSection(grade_id: $grade_id, name: $name) {
      message
      id
    }
  }
`;

// get subject associated with grade data api

export const Get_Grade_Subject_Date = gql`
  query GetClassSubject($grade_id: Int!) {
    getClassSubject(grade_id: $grade_id) {
      id
      subject {
        name
      }
    }
  }
`;

// assing subject api
export const Assign_Subject_Data = gql`
  mutation AssingSubject($grade_id: Int!, $subject_id: Int!) {
    assingSubject(grade_id: $grade_id, subject_id: $subject_id) {
      message
      id
    }
  }
`;

// delete  subject associated with grade api
export const Delete_Subject_Associated = gql`
  mutation DeleteClassSubject($id: Int!) {
    deleteClassSubject(id: $id) {
      message
    }
  }
`;

// to get Manage Session Data
export const Get_Timetable = gql`
  query Getclasstimetable($institution_id: Int!, $section_id: Int!) {
    getClassTimetable(
      institution_id: $institution_id
      section_id: $section_id
    ) {
      id
      institution_id
      section_id
      period_template_id
      start_date
      end_date
    }
  }
`;

//add  route single one

export const Add_TransPort_Route = gql`
  mutation AddTransportRoute(
    $institution_id: Int!
    $route_name: String!
    $start_point: String!
    $end_point: String!
    $driver_name: driver_name
    $vehicle_owner_name: vehicle_owner_name
    $driver_phone_number: String!
    $vehicle_type: String!
    $vehicle_registered_number: String!
    $max_capacity: Int!
    $route_url: String!
    $start_time: String
    $end_time: String!
  ) {
    addTransportRoute(
      institution_id: $institution_id
      route_name: $route_name
      start_point: $start_point
      end_point: $end_point
      driver_name: $driver_name
      vehicle_owner_name: $vehicle_owner_name
      driver_phone_number: $driver_phone_number
      vehicle_type: $vehicle_type
      vehicle_registered_number: $vehicle_registered_number
      max_capacity: $max_capacity
      route_url: $route_url
      start_time: $start_time
      end_time: $end_time
    ) {
      id
      message
    }
  }
`;

// delete create route
export const delete_Transport_route = gql`
  mutation DeleteTransportRoute($id: Int!) {
    deleteTransportRoute(id: $id) {
      message
    }
  }
`;

// get  school notice  data
export const GET_Route_List_Data = gql`
  query GetTransportRoute($institution_id: Int!) {
    getTransportRoute(institution_id: $institution_id) {
      id
      route_name
      start_point
      end_point
      driver_name {
        first_name
        middle_name
        last_name
      }
      driver_phone_number
      vehicle_owner_name {
        first_name
        middle_name
        last_name
      }
      vehicle_type
      vehicle_registered_number
      max_capacity
      route_url
      start_time
      end_time
    }
  }
`;

// to get pick stop point data
export const Get_Pickup_Route_Stop = gql`
  query GetTransportStop($transport_route_id: Int!) {
    getTransportStop(transport_route_id: $transport_route_id) {
      id
      stop_name
    }
  }
`;

// to get invoice data
export const Get_Invoice_Data = gql`
  query getInvoice($institution_id: Int!, $academic_session_id: Int) {
    getInvoice(
      institution_id: $institution_id
      academic_session_id: $academic_session_id
    ) {
      id
      create_date
      due_date
      amount
      name
      recurrence
      description
    }
  }
`;

//contact us
export const Contact_Us_Data = gql`
  mutation ContactUs(
    $institution_id: Int!
    $firstName: String!
    $lastName: String!
    $email: String!
    $phone: String!
    $message: String!
  ) {
    contactUs(
      institution_id: $institution_id
      firstName: $firstName
      lastName: $lastName
      email: $email
      phone: $phone
      message: $message
    ) {
      id
      message
    }
  }
`;

// to get admission enquery data
export const Get_Admission_Interest_Data = gql`
  query GetAddmissionEnquiry(
    $institution_id: Int!
    $academic_session: String!
  ) {
    getAddmissionEnquiry(
      institution_id: $institution_id
      academic_session: $academic_session
    ) {
      update_time
      id
      fatherName {
        first_name
        middle_name
        last_name
      }
      studentName {
        first_name
        middle_name
        last_name
      }
      siblingName {
        first_name
        middle_name
        last_name
      }
      student_birth_date
      academic_session
      grade
      contact_number
      email
      referee
      sibling_class
      comment
      status
    }
  }
`;

// create or add enquiry details
export const Add_Enquery_Data = gql`
  mutation AdmissionEnquiry(
    $institution_id: Int!
    $Parent_first_name: String!
    $Parent_middle_name: String!
    $Parent_last_name: String!
    $Student_first_name: String!
    $Student_middle_name: String!
    $Student_last_name: String!
    $student_birth_date: String!
    $academic_session: String!
    $grade: Int!
    $contact_number: String!
    $email: String!
    $referee: String!
    $sibling_first_name: String!
    $sibling_middle_name: String!
    $sibling_last_name: String!
    $sibling_class: String!
    $comment: String!
  ) {
    admissionEnquiry(
      institution_id: $institution_id
      Parent_first_name: $Parent_first_name
      Parent_middle_name: $Parent_middle_name
      Parent_last_name: $Parent_last_name
      Student_first_name: $Student_first_name
      Student_middle_name: $Student_middle_name
      Student_last_name: $Student_last_name
      student_birth_date: $student_birth_date
      academic_session: $academic_session
      grade: $grade
      contact_number: $contact_number
      email: $email
      referee: $referee
      sibling_first_name: $sibling_first_name
      sibling_middle_name: $sibling_middle_name
      sibling_last_name: $sibling_last_name
      sibling_class: $sibling_class
      comment: $comment
    ) {
      id
      message
    }
  }
`;

// get  invoice template data single one
export const Get_Template_Invoice_Data = gql`
  query GetInvoiceTemplate($institution_id: Int!) {
    getInvoiceTemplate(institution_id: $institution_id) {
      id
      name
    }
  }
`;

// create edit invoice data
export const Create_Edit_invoice_Data = gql`
  mutation AddInvoiceTemplate($institution_id: Int!, $name: String!) {
    addInvoiceTemplate(institution_id: $institution_id, name: $name) {
      message
      id
    }
  }
`;

// edit  create edit invoice
export const Edit_create_edit_invoice = gql`
  mutation UpdateInvoiceTemplate(
    $id: Int!
    $name: String!
    $description: String!
  ) {
    updateInvoiceTemplate(id: $id, name: $name, description: $description) {
      message
    }
  }
`;

// delete create_ edit invoicee single one
export const Delete_Create_edit_Data = gql`
  mutation deleteInvoiceTemplate($id: Int!) {
    deleteInvoiceTemplate(id: $id) {
      message
    }
  }
`;

// create or add enquiry details
export const Add_Student_Admission_Data = gql`
  mutation AddStudent(
    $transport_pickup_stop_id: Int
    $transport_drop_stop_id: Int
    $Father_nationality: String!
    $Father_email_address: String!
    $Father_passport_number_id: Int!
    $Father_occupation: String!
    $Father_phone_number: String!
    $Father_national_id: Int!
    $Father_annual_income: String!
    $Father_qualification_id: Int!
    $Mother_nationality: String!
    $Mother_email_address: String!
    $Mother_passport_number_id: Int!
    $Mother_occupation: String!
    $Mother_phone_number: String!
    $Mother_national_id: Int!
    $Mother_annual_income: String!
    $Mother_qualification_id: Int!
    $Gardian_nationality: String!
    $Gardian_email_address: String!
    $Gardian_passport_number_id: Int!
    $Gardian_occupation: String!
    $Gardian_phone_number: String!
    $Gardian_national_id: Int!
    $Gardian_annual_income: String!
    $Gardian_qualification_id: Int!
    $academic_session_id: Int!
    $grade_id: Int!
    $section_id: Int!
    $roll_number: String!
    $Student_first_name: String!
    $Student_middle_name: String!
    $Student_last_name: String!
    $institution_id: Int!
    $joining_date: String!
    $gender: String!
    $birth_date: String!
    $Current_line1: String!
    $Current_line2: String!
    $Current_state: String!
    $Current_zip_code: Int!
    $Current_country: String!
    $Permanent_line1: String!
    $Permanent_line2: String!
    $Permanent_state: String!
    $Permanent_zip_code: Int!
    $Permanent_country: String!
    $blood_group: String!
    $S_nationality: String!
    $passport_number_id: Int!
    $national_id: Int!
    $religion: String!
    $height: Int!
    $weight: Int!
    $sibling_id: Int!
    $email: String!
    $sibling_relation: String!
    $Father_first_name: String!
    $Father_middle_name: String!
    $Father_last_name: String!
    $Mother_first_name: String!
    $Mother_middle_name: String!
    $Mother_last_name: String!
    $Gardian_first_name: String!
    $Gardian_middle_name: String!
    $Gardian_last_name: String!
    $photo: photo1
    $national: national1
    $tax: tax1
    $birth_cert: birth_cert1
  ) {
    addStudent(
      transport_pickup_stop_id: $transport_pickup_stop_id
      transport_drop_stop_id: $transport_drop_stop_id

      Father_nationality: $Father_nationality
      Father_email_address: $Father_email_address
      Father_passport_number_id: $Father_passport_number_id
      Father_occupation: $Father_occupation
      Father_phone_number: $Father_phone_number
      Father_national_id: $Father_national_id
      Father_annual_income: $Father_annual_income
      Father_qualification_id: $Father_qualification_id

      Mother_nationality: $Mother_nationality
      Mother_email_address: $Mother_email_address
      Mother_passport_number_id: $Mother_passport_number_id
      Mother_occupation: $Mother_occupation
      Mother_phone_number: $Mother_phone_number
      Mother_national_id: $Mother_national_id
      Mother_annual_income: $Mother_annual_income
      Mother_qualification_id: $Mother_qualification_id

      Gardian_nationality: $Gardian_nationality
      Gardian_email_address: $Gardian_email_address
      Gardian_passport_number_id: $Gardian_passport_number_id
      Gardian_occupation: $Gardian_occupation
      Gardian_phone_number: $Gardian_phone_number
      Gardian_national_id: $Gardian_national_id
      Gardian_annual_income: $Gardian_annual_income
      Gardian_qualification_id: $Gardian_qualification_id

      academic_session_id: $academic_session_id

      grade_id: $grade_id
      section_id: $section_id
      email: $email
      roll_number: $roll_number
      Student_first_name: $Student_first_name
      Student_middle_name: $Student_middle_name
      Student_last_name: $Student_last_name

      institution_id: $institution_id
      joining_date: $joining_date
      gender: $gender
      birth_date: $birth_date
      Current_line1: $Current_line1
      Current_line2: $Current_line2
      Current_state: $Current_state

      Current_zip_code: $Current_zip_code
      Current_country: $Current_country
      Permanent_line1: $Permanent_line1
      Permanent_line2: $Permanent_line2
      Permanent_state: $Permanent_state
      Permanent_zip_code: $Permanent_zip_code
      Permanent_country: $Permanent_country

      blood_group: $blood_group
      S_nationality: $S_nationality
      passport_number_id: $passport_number_id
      national_id: $national_id
      religion: $religion
      height: $height
      weight: $weight

      sibling_id: $sibling_id
      sibling_relation: $sibling_relation
      Father_first_name: $Father_first_name
      Father_middle_name: $Father_middle_name
      Father_last_name: $Father_last_name
      Mother_first_name: $Mother_first_name
      Mother_middle_name: $Mother_middle_name
      Mother_last_name: $Mother_last_name

      Gardian_first_name: $Gardian_first_name
      Gardian_middle_name: $Gardian_middle_name
      Gardian_last_name: $Gardian_last_name

      photo: $photo
      national: $national
      tax: $tax
      birth_cert: $birth_cert
    ) {
      id
      message
    }
  }
`;

// get Student List
export const GET_Student_form_list = gql`
  query GetStudentList($institution_id: Int!) {
    getStudentList(institution_id: $institution_id) {
      id
      status
      roll_number
      transport_stop {
        transport_route {
          route_name
        }
        stop_name
      }
      transport_pickup {
        transport_route {
          route_name
        }
        stop_name
      }
      section {
        name
        grade {
          gradeName
        }
      }
      student_profile {
        id
        joining_date
        birth_date
        gender
        blood_group
        nationality
        religion
        height
        weight
        email
        sibling_relation
        name {
          first_name
          last_name
          middle_name
        }
      }
    }
  }
`;
// create or add Employee data
export const Add_Employee_Data = gql`
  mutation AddEmployee(
    $designation_id: Int!
    $department_id: Int!
    $email: String!
    $Teacher_first_name: String!
    $Teacher_middle_name: String!
    $Teacher_last_name: String!
    $phone: String!
    $institution_id: Int!
    $joining_date: String!
    $gender: String!
    $birth_date: String!
    $Current_line1: String!
    $Current_line2: String!
    $Current_city: String!
    $Current_state: String!
    $Current_zip_code: String!
    $Current_country: String!
    $Permanent_line1: String!
    $Permanent_line2: String!
    $Permanent_city: String!
    $Permanent_state: String!
    $Permanent_zip_code: String!
    $Permanent_country: String!
    $blood_group: String!
    $nationality: String!
    $tax_id_number: String!
    $marital_status: String!
    $passport_number: String!
    $national_id_number: String!
    $religion: String!
    $Father_first_name: String!
    $Father_middle_name: String!
    $Father_last_name: String!
    $Mother_first_name: String!
    $Mother_middle_name: String!
    $Mother_last_name: String!
    $Spouse_first_name: String!
    $Spouse_middle_name: String!
    $Spouse_last_name: String!
    $education_qualifications: [education_qualifications]
    $other: [other]
    $photo: photo1
    $birth_cert: birth_cert1
    $tax: tax1
    $certificate: certificate
    $passport: passport
    $passport_expiry_date: String!
  ) {
    addEmployee(
      designation_id: $designation_id
      department_id: $department_id
      email: $email
      Teacher_first_name: $Teacher_first_name
      Teacher_middle_name: $Teacher_middle_name
      Teacher_last_name: $Teacher_last_name
      phone: $phone
      institution_id: $institution_id
      joining_date: $joining_date
      gender: $gender
      birth_date: $birth_date
      Current_line1: $Current_line1
      Current_line2: $Current_line2
      Current_city: $Current_city
      Current_state: $Current_state
      Current_zip_code: $Current_zip_code
      Current_country: $Current_country
      Permanent_line1: $Permanent_line1
      Permanent_line2: $Permanent_line2
      Permanent_city: $Permanent_city
      Permanent_state: $Permanent_state
      Permanent_zip_code: $Permanent_zip_code
      Permanent_country: $Permanent_country
      blood_group: $blood_group
      nationality: $nationality
      tax_id_number: $tax_id_number
      marital_status: $marital_status
      passport_number: $passport_number
      national_id_number: $national_id_number
      religion: $religion
      passport_expiry_date: $passport_expiry_date
      Father_first_name: $Father_first_name
      Father_middle_name: $Father_middle_name
      Father_last_name: $Father_last_name
      Mother_first_name: $Mother_first_name
      Mother_middle_name: $Mother_middle_name
      Mother_last_name: $Mother_last_name
      Spouse_first_name: $Spouse_first_name
      Spouse_middle_name: $Spouse_middle_name
      Spouse_last_name: $Spouse_last_name
      education_qualifications: $education_qualifications
      photo: $photo
      birth_cert: $birth_cert
      tax: $tax
      certificate: $certificate
      passport: $passport
      other: $other
    ) {
      id
      message
    }
  }
`;

// to get all employee data
export const Get_Employee_All_data = gql`
  query GetEmployee($institution_id: Int!, $department_id: Int!) {
    getEmployee(
      institution_id: $institution_id
      department_id: $department_id
    ) {
      id
      passport_identity {
        encrypted_id
        expiry_date
      }
      tax_identity {
        encrypted_id
      }
      national_identity {
        encrypted_id
      }
      passport {
        filename
        name
        path
        type
      }
      certificate {
        filename
        name
        path
        type
      }
      others {
        filename
        name
        path
        type
      }
      department {
        id
        name
      }
      designation {
        id
        name
      }
      joining_date
      name {
        first_name
        middle_name
        last_name
      }
      email
      birth_date
      gender
      phone
      blood_group
      nationality

      religion
      marital_status
      spouseName {
        first_name
        middle_name
        last_name
      }
      motherName {
        first_name
        middle_name
        last_name
      }
      fatherName {
        first_name
        middle_name
        last_name
      }
      currentAddress {
        line1
        line2
        city
        state
        zip_code
        country
      }
      permanentAddress {
        line1
        line2
        city
        state
        zip_code
        country
      }
      education_qualifications {
        course_name
        university_name
        start_date
        end_date
      }

      birth_cert {
        name
        type
        reference_id
        doc_reference_schema
        path
        filename
      }
      photo {
        name
        type
        reference_id
        doc_reference_schema
        path
        filename
      }

      tax {
        name
        type
        reference_id
        doc_reference_schema
        path
        filename
      }
      login {
        login_id
        display_id
      }
    }
  }
`;

// edit period data
export const Edit_PeroidTimeTable_Data = gql`
  mutation UpdateSubject(
    $id: Int!
    $period_name: String!
    $name: String!
    $start_time: String!
    $end_time: String!
  ) {
    updatePeriodTemplate(
      id: $id
      period_name: $period_name
      name: $name
      start_time: $start_time
      end_time: $end_time
    ) {
      message
    }
  }
`;

//delete time table

export const Delete_time_tableTemplate = gql`
  mutation DeletePeriodTemplate($id: Int!) {
    deletePeriodTemplate(id: $id) {
      message
    }
  }
`;

// get leave request data_student
export const Get_Student_Leave_Data = gql`
  query GetLeaveRequestByUserId($user_id: Int!) {
    getLeaveRequestByUserId(user_id: $user_id) {
      id
      status
      from_date
      to_date
      applied_date
      approved_date
      leave_category_id
      user_id
      hours
      leave_type
      notes
      documents {
        name
        path
        filename
        type
        reference_id
      }
      leave_category {
        hours
        name
        description
        institution_id
      }
    }
  }
`;
// get leave request for teacher By Dates Between
export const Get_Employee_LeaveByEmployeeId_By_Dates = gql`
  query GetEmployeeLeaveByEmployeeId(
    $user_id: Int!
    $from_date: String!
    $to_date: String!
  ) {
    getEmployeeLeaveByEmployeeId(
      user_id: $user_id
      from_date: $from_date
      to_date: $to_date
    ) {
      id
      from_date
      to_date
      applied_date
      approved_date
      leave_category_id
      user_id
      hours
      leave_type
      notes

      documents {
        name
        path
        filename
        type
        reference_id
      }

      leave_category {
        hours
        name
        description
        institution_id
      }
    }
  }
`;

// get leave request for teacher
export const Get_Employee_LeaveByEmployeeId = gql`
  query GetEmployeeLeaveByEmployeeId($user_id: Int!) {
    getEmployeeLeaveByEmployeeId(user_id: $user_id) {
      id
      from_date
      to_date
      applied_date
      approved_date
      leave_category_id
      user_id
      hours
      leave_type
      notes
      status
      documents {
        name
        path
        filename
        type
        reference_id
      }

      leave_category {
        hours
        name
        description
        institution_id
      }
    }
  }
`;

// get leave request for teacher
export const Get_Teacher_Leave = gql`
  query GetEmployeeLeaves($institution_id: Int!) {
    getEmployeeLeaves(institution_id: $institution_id) {
      status
      employee {
        name {
          first_name
          middle_name
          last_name
        }
      }
      from_date
      to_date
      applied_date
      approved_date
      hours
      leave_type
      notes
      leave_category {
        hours
        name
        description
        institution_id
      }
    }
  }
`;

// get invoice summary data for student
export const Get_Student_Details_Data = gql`
  query GetStudentDetailForm($id: Int!) {
    getStudentDetailForm(id: $id) {
      login {
        user_id
        login_id
        display_id
      }
      status
      section {
        id
        name
        grade {
          id
          gradeName
        }
      }
      student_profile {
        education_qualification_doc {
          name
          type
          reference_id
          doc_reference_schema
          path
          filename
        }
        national {
          name
          type
          reference_id
          doc_reference_schema
          path
          filename
        }
        photo {
          name
          type
          reference_id
          doc_reference_schema
          path
          filename
        }
        tax {
          name
          type
          reference_id
          doc_reference_schema
          path
          filename
        }
        birth_cert {
          name
          type
          reference_id
          doc_reference_schema
          path
          filename
        }
        institution {
          name
          phone_number
          email_address
          home_url
          icon_id
          address {
            line1
            line2
            city
            state
            zip_code
            country
          }
          office_time
        }
        joining_date
        name {
          first_name
          middle_name
          last_name
        }
        email
        birth_date
        gender
        blood_group
        nationality
        passport_number_id
        user_identity {
          encrypted_id
          expiry_date
        }

        religion
        height
        weight
        currentAddress {
          line1
          line2
          city
          state
          zip_code
          country
        }
        permanentAddress {
          line1
          line2
          city
          state
          zip_code
          country
        }
        father {
          nationality
          email_address
          occupation
          phone_number
          annual_income
          name {
            first_name
            middle_name
            last_name
          }
          user_identity {
            encrypted_id
            expiry_date
          }
        }
        mother {
          nationality
          email_address
          occupation
          phone_number
          annual_income
          name {
            first_name
            middle_name
            last_name
          }
          user_identity {
            encrypted_id
            expiry_date
          }
        }

        guardian {
          nationality
          email_address
          occupation
          phone_number
          annual_income
          name {
            first_name
            middle_name
            last_name
          }
          user_identity {
            encrypted_id
            expiry_date
          }
        }
        siblingName {
          first_name
          middle_name
          last_name
        }
        sibling_relation
      }
      roll_number
      section_id
      transport_stop {
        transport_route {
          route_name
        }
        stop_name
      }
      transport_pickup {
        transport_route {
          route_name
        }
        stop_name
      }
    }
  }
`;

//cancel student leave
export const Cancel_student_leave = gql`
  mutation CancelLeaveRequestByRequestId($id: Int!, $institution_id: Int!) {
    cancelLeaveRequestByRequestId(id: $id, institution_id: $institution_id) {
      message
    }
  }
`;

// get Student list for section id
export const Get_studentlist_SEction_id = gql`
  query GetStudentDetailForm($id: Int!) {
    getStudentDetailForm(id: $id) {
      section {
        id
        name
        grade {
          gradeName
        }
      }
      student_profile {
        joining_date
        name {
          first_name
          middle_name
          last_name
        }
        birth_date
        gender
        blood_group
        nationality
        passport_number_id
        user_identity {
          type
          expiry_date
        }
        national_id
        religion
        height
        weight
        currentAddress {
          line1
          line2
          city
          state
          zip_code
          country
        }
        permanentAddress {
          line1
          line2
          city
          state
          zip_code
          country
        }
        father {
          nationality
          email_address
          occupation
          phone_number
          annual_income
        }
        mother {
          nationality
          email_address
          occupation
          phone_number
          annual_income
        }

        guardian {
          nationality
          email_address
          occupation
          phone_number
          annual_income
        }
        siblingName {
          first_name
          middle_name
          last_name
        }
        sibling_relation
      }
      roll_number
      transport_stop {
        transport_route {
          route_name
        }
        stop_name
      }
      transport_pickup {
        transport_route {
          route_name
        }
        stop_name
      }
    }
  }
`;

//get Exam time table data
export const GET_EXAM_TimeTable_DATA_Student = gql`
  query GetExamTimetable($exam_id: Int!) {
    getExamTimetable(exam_id: $exam_id) {
      id
      start_calendar {
        datetime
      }
      end_calendar {
        datetime
      }
      exam_id
      syllabus
      subject {
        name
      }
      location
      marks
    }
  }
`;

//get notice data
export const Get_School_Notice_data = gql`
  query getNoticeBoardByInstitutionId($institution_id: Int!) {
    getNoticeBoardByInstitutionId(institution_id: $institution_id) {
      id
      status
      title
      subject
      notice_type
      admin {
        name {
          first_name
          middle_name
          last_name
        }
      }
      publish_date
      expiry_date
      location
      content
      documents {
        path
        filename
        type
        name
      }
    }
  }
`;

//get notice data
export const Get_Class_Notice_data = gql`
  query GetNoticeBoardBySectionId($institution_id: Int!, $section_id: Int!) {
    getNoticeBoardBySectionId(
      institution_id: $institution_id
      section_id: $section_id
    ) {
      id
      title
      status
      subject
      notice_type
      section {
        id
        name
        grade {
          id
          gradeName
        }
      }
      employee {
        name {
          first_name
          middle_name
          last_name
        }
      }
      publish_date
      expiry_date
      location
      content
      documents {
        path
        filename
        name
        type
      }
    }
  }
`;

//get Student Exam Result
export const Get_Student_Exam_Result = gql`
  query GetExamResult($student_id: Int!, $exam_timetable_id: Int!) {
    getExamResult(
      student_id: $student_id
      exam_timetable_id: $exam_timetable_id
    ) {
      id
      student {
        roll_number
        student_profile {
          name {
            first_name
          }
        }
      }
      mark_grade_id
      marks
      exam_timetable_and_exam_name {
        marks
        exam_mode
        start_calendar {
          day
          datetime
        }
        end_calendar {
          day
          datetime
        }
        subject {
          name
        }
        exam {
          name
        }
      }
    }
  }
`;

//get Student Exam Result
export const Get_Parent_student_data = gql`
  query GetStudentByParent(
    $father_id: Int!
    $institution_id: Int!
    $status: String!
  ) {
    getStudentByParent(
      father_id: $father_id
      institution_id: $institution_id
      status: $status
    ) {
      id
      status
      gender
      parent {
        name {
          first_name
          middle_name
          last_name
        }
        email_address
        phone_number
      }
      grade {
        id
        gradeName
      }
      birth_date
      name {
        first_name
        middle_name
        last_name
      }
      student {
        id
        roll_number
        section {
          id
          name
          grade {
            gradeName
          }
        }
      }
    }
  }
`;

//get Student Exam Result
export const Get_Upcoming_Events = gql`
  query GetEvent($institution_id: Int!) {
    getEvent(institution_id: $institution_id) {
      id
      event_name
      start_date
      end_date
      organizer_name {
        first_name
        middle_name
        last_name
      }
      publish_date
      status
      description
      location
      expiry_date
      content
      event_participant {
        event_invite_type
        email
      }
      documents {
        id
        name
        type
        path
        filename
      }
    }
  }
`;

// get particular students invoice
export const GET_Student_Invoice_Data = gql`
  query GetInvoiceByStudentId($student_id: Int!) {
    getInvoiceByStudentId(student_id: $student_id) {
      id
      create_date
      due_date
      amount
      recurrence
      description
      invoice_id
      invoice_display_id
      payments {
        id
        create_time
        update_time
        funding_instrument_type
        payment_date
        fi_source
        external_reference_number
        amount
        notes
        status
      }
      status
      invoice {
        id
        currency_code
        create_date
        due_date
        name
        description
        invoice_fee_items {
          id
          fee_subtype_id
          amount
          tax
          derived_total_cost
        }
      }
      student {
        student_profile {
          name {
            first_name
          }
        }
      }
    }
  }
`;

/////teacher Flow

// to get teacher assignment data
export const Get_Teacher_Assignment_Data = gql`
  query GetAssignment($teacher_id: Int!, $academic_session_id: Int!) {
    getAssignment(
      teacher_id: $teacher_id
      academic_session_id: $academic_session_id
    ) {
      subject {
        id
        name
      }
      id
      name
      status
      description

      total_score
    }
  }
`;
/// APi for teacher homepage for only created status

export const Get_Assignment_Created_Status = gql`
  query GetAssignmentByStatusCreated($teacher_id: Int!) {
    getAssignmentByStatusCreated(teacher_id: $teacher_id) {
      subject {
        name
        id
      }
      name
      status
      description
      total_score
      id
    }
  }
`;
/// APi for teacher homepage for only created status

export const Get_Assignment_Drafted_Status = gql`
  query GetAssignmentByStatusDraft($teacher_id: Int!) {
    getAssignmentByStatusDraft(teacher_id: $teacher_id) {
      subject {
        id
        name
      }
      name
      status
      description
      total_score

      id
    }
  }
`;

/// get Assignment for teacher home page review pending

export const Get_Assignment_ReviewPending_Status = gql`
  query getClassAssignmentForReviewPending {
    getClassAssignmentForReviewPending {
      id
      assignment {
        id
        name
        description

        total_score
        subject {
          name
          id
        }
      }
      section {
        name
        grade {
          gradeName
        }
      }
      start_date
      end_date
      status
      remarks
      score
    }
  }
`;

// to get teacher assignment data
export const Get_Class_Assignment_Data = gql`
  query getClassAssignment($status: String!) {
    getClassAssignment(status: $status) {
      id
      assignment {
        id
        name
        description

        total_score
        subject {
          name
        }
      }
      section {
        name
        grade {
          gradeName
        }
      }
      start_date
      end_date
      status
      remarks
      score
    }
  }
`;

// {
// 	getClassAssignment {
// 	id
// 	assignment{
//  name
// 	description
// 	publish_date
// 	total_score
// 	  subject{
//  short_name
// 		full_name
// 	  }
// 	}
// 	section{
// 	  name
//  grade{
//  gradeName
//  }
// 	}
// 	start_date
// 	end_date
// 	status
// 	remarks
// 	score
//   }
//  }

// create Assignment for teacher

export const Create_Assignment_Teacher = gql`
  mutation AddAssignmentForTeacher(
    $teacher_id: Int!
    $name: String!
    $description: String!
    $total_score: Int!
    $subject_id: Int!
    $academic_session_id: Int!
  ) {
    addAssignmentForTeacher(
      teacher_id: $teacher_id
      name: $name
      description: $description
      total_score: $total_score
      subject_id: $subject_id
      academic_session_id: $academic_session_id
    ) {
      id
      name
      message
      subject {
        id
      }
      status
      description
      total_score
    }
  }
`;

//

//change assignment status  draft  to published

export const MAKE_STATUS_PUBLISH = gql`
  mutation publishAssignment($id: Int!) {
    publishAssignment(id: $id) {
      message
    }
  }
`;

//Get Assignment Review By Student
export const Get_Assignment_Review_By_Student = gql`
  query StudentReviewSubmittedAssignment(
    $assignment_id: Int!
    $student_assignment_id: Int!
  ) {
    studentReviewSubmittedAssignment(
      assignment_id: $assignment_id
      student_assignment_id: $student_assignment_id
    ) {
      id
      answer
      assignment {
        total_score
      }
      assignment_question {
        question_number
        marks
        description
        question_section {
          name
        }
      }
    }
  }
`;

//Get Assignment Review By teacher
export const Get_Assignment_Review_By_Teacher = gql`
  query StudentReviewSubmittedAssignment(
    $assignment_id: Int!
    $student_assignment_id: Int!
  ) {
    studentReviewSubmittedAssignment(
      assignment_id: $assignment_id
      student_assignment_id: $student_assignment_id
    ) {
      id
      answer
      remarks
      teacher_marks
      assignment {
        total_score
      }
      assignment_question {
        id
        answer
        question_number
        marks
        description
        question_section {
          name
        }
      }
    }
  }
`;

//Get Assignment Review By Student
export const Get_Assignment_Completed_Result = gql`
  query GetAssignmentResult(
    $assignment_id: Int!
    $student_assignment_id: Int!
  ) {
    getAssignmentResult(
      assignment_id: $assignment_id
      student_assignment_id: $student_assignment_id
    ) {
      id
      answer
      teacher_marks
      remarks
      student_assignment {
        status
        score
        remarks
      }
      assignment {
        total_score
      }
      assignment_question {
        question_number
        marks
        description
        answer
        question_section {
          name
        }
      }
    }
  }
`;

//get assignment question
export const Get_Question_Section = gql`
  query GetQuestionSection($assignment_id: Int!) {
    getQuestionSection(assignment_id: $assignment_id) {
      id
      name
      description
    }
  }
`;

// get assignment question by assignment id

export const Get_Assignment_Question = gql`
  query GetAssignmentQuestion($assignment_id: Int!) {
    getAssignmentQuestion(assignment_id: $assignment_id) {
      id
      description
      question_type
      answer
      marks
      question_number
      question_section {
        id
        name
        description
      }
      parent_question {
        id
        description
        question_type
        answer
        marks
        question_number
      }
    }
  }
`;

export const Add_Question_Section = gql`
  mutation AddQuestionSection(
    $description: String!
    $name: String!
    $assignment_id: Int!
  ) {
    addQuestionSection(
      description: $description
      name: $name
      assignment_id: $assignment_id
    ) {
      id
      message
    }
  }
`;

// delete assignment question

export const Delete_Assignment_Question_ById = gql`
  mutation DeleteAssignmentQuestion($id: Int!, $assignment_id: Int!) {
    deleteAssignmentQuestion(id: $id, assignment_id: $assignment_id) {
      message
    }
  }
`;

// delete question section
export const Delete_Question_Section = gql`
  mutation DeleteQuestionSection($id: Int!, $assignment_id: Int!) {
    deleteQuestionSection(id: $id, assignment_id: $assignment_id) {
      message
    }
  }
`;

//edit  question section with assignment id old
// export const Update_Question_Section = gql`
//   mutation UpdateQuestionSection(
//     $id: Int!
//     $assignment_id: Int!
//     $description: String!
//     $name: String!
//   ) {
//     updateQuestionSection(
//       id: $id
//       assignment_id: $assignment_id
//       description: $description
//       name: $name
//     ) {
//       message
//     }
//   }
// `;

//edit  question section

export const Update_Question_Section = gql`
  mutation UpdateQuestionSection(
    $id: Int!
    $description: String!
    $name: String!
  ) {
    updateQuestionSection(id: $id, description: $description, name: $name) {
      message
    }
  }
`;

// edit assignment question
export const Update_Assignment_Question = gql`
  mutation UpdateAssignmentQuestion(
    $id: Int!
    $assignment_id: Int!
    $description: String!
    $question_type: String!
    $answer: String!
    $marks: Int!
    $question_number: String!
    $question_section_id: Int!
    $parent_question_id: Int!
  ) {
    updateAssignmentQuestion(
      id: $id
      assignment_id: $assignment_id
      description: $description
      question_type: $question_type
      answer: $answer
      marks: $marks
      question_number: $question_number
      question_section_id: $question_section_id
      parent_question_id: $parent_question_id
    ) {
      message
    }
  }
`;
// DELETE TEACHER ASSIGNMENT
export const DELETE_TEACHER_ASSIGNMENT = gql`
  mutation deleteAssignment($id: Int!) {
    deleteAssignment(id: $id) {
      message
    }
  }
`;

// add question section
export const Add_Assignment_Question = gql`
  mutation AddAssignmentQuestion(
    $assignment_id: Int!
    $description: String!
    $question_type: String!
    $answer: String!
    $marks: Int!
    $question_number: String!
    $question_section_id: Int!
    $parent_question_id: Int!
  ) {
    addAssignmentQuestion(
      assignment_id: $assignment_id
      description: $description
      question_type: $question_type
      answer: $answer
      marks: $marks
      question_number: $question_number
      question_section_id: $question_section_id
      parent_question_id: $parent_question_id
    ) {
      message
      id
    }
  }
`;

// add multiple question section
export const Add_Multiple_Assignment_Question = gql`
  mutation AddAssignmentQuestionWithMultipleChoice(
    $assignment_id: Int!
    $description: String!
    $question_type: String!
    $answers: [answer!]!
    $marks: Int!
    $question_number: String!
    $question_section_id: Int!
    $parent_question_id: Int!
  ) {
    addAssignmentQuestionWithMultipleChoice(
      assignment_id: $assignment_id
      description: $description
      question_type: $question_type
      answers: $answers
      marks: $marks
      question_number: $question_number
      question_section_id: $question_section_id
      parent_question_id: $parent_question_id
    ) {
      message
      id
    }
  }
`;

// assign assignment
export const Update_Assignment_Name = gql`
  mutation UpdateAssignment(
    $id: Int!
    $subject_id: Int!
    $name: String!
    $description: String!
    $total_score: Int!
  ) {
    updateAssignment(
      id: $id
      subject_id: $subject_id
      name: $name
      description: $description
      total_score: $total_score
    ) {
      message
    }
  }
`;

// create Event for teacher

export const Create_Event_Teacher = gql`
  mutation AddEvent(
    $institution_id: Int!
    $event_name: String!
    $start_date: String!
    $end_date: String!
    $organizer_id: Int!
    $publish_date: String!
    $description: String!
    $location: String!
    $expiry_date: String!
    $content: String!
    $event_doc: [event_doc!]
  ) {
    addEvent(
      institution_id: $institution_id
      event_name: $event_name
      start_date: $start_date
      end_date: $end_date
      organizer_id: $organizer_id
      publish_date: $publish_date
      description: $description
      location: $location
      expiry_date: $expiry_date
      content: $content
      event_doc: $event_doc
    ) {
      message
      id
    }
  }
`;

// get Leave Techer myleave
export const Get_Leave_Category = gql`
  query GetLeaveCategory($institution_id: Int!) {
    getLeaveCategory(institution_id: $institution_id) {
      id
      name
      hours
      description
    }
  }
`;

// create leave request

export const CREATE_TEACHER_LEAVE_REQUEST = gql`
  mutation ApplyLeaveByEmployee(
    $institution_id: Int!
    $Subject: String!
    $from_date: String!
    $to_date: String!
    $user_id: Int!
    $leave_category_id: Int!
    $notes: String!
    $hours: Int!
    $leave_document: [leave_document!]
  ) {
    applyLeaveByEmployee(
      institution_id: $institution_id
      Subject: $Subject
      from_date: $from_date
      to_date: $to_date
      user_id: $user_id
      leave_category_id: $leave_category_id
      notes: $notes
      hours: $hours
      leave_document: $leave_document
    ) {
      message
      id
    }
  }
`;

// create leave request student

export const CREATE_STUDENT_LEAVE_REQUEST = gql`
  mutation ApplyLeaveByStudent(
    $institution_id: Int!
    $Subject: String!
    $from_date: String!
    $to_date: String!
    $user_id: Int!
    $leave_category_id: Int!
    $notes: String!
    $hours: Int!
    $leave_document: [leave_document!]
  ) {
    applyLeaveByStudent(
      institution_id: $institution_id
      Subject: $Subject
      from_date: $from_date
      to_date: $to_date
      user_id: $user_id
      leave_category_id: $leave_category_id
      notes: $notes
      hours: $hours
      leave_document: $leave_document
    ) {
      message
    }
  }
`;

// update leave request
export const Update_Teacher_Leave_Request = gql`
  mutation UpdateLeaveRequest(
    $id: Int!
    $leave_type: String!
    $from_date: String!
    $to_date: String!
    $notes: String!
    $hours: Int!
    $leave_document: [leave_document!]
  ) {
    updateLeaveRequest(
      id: $id
      leave_type: $leave_type
      from_date: $from_date
      to_date: $to_date
      notes: $notes
      hours: $hours
      leave_document: $leave_document
    ) {
      message
    }
  }
`;
//-------------------student API--------------------------
// get student assignment

export const Get_Student_Assignment = gql`
  query getAssignmentForStudent($user_id: Int!) {
    getAssignmentForStudent(user_id: $user_id) {
      id
      remarks
      status
      score
      assignment_id
      class_assignment {
        start_date
        end_date
      }
      assignment {
        name
        total_score
        description
        subject {
          name
        }
      }
    }
  }
`;

// Get Exam By section id
export const Get_Teacher_Exam = gql`
  query GetExam($section_id: Int!) {
    getExam(section_id: $section_id) {
      id
      name
      status
      section {
        id
        name
        grade {
          gradeName
        }
      }
    }
  }
`;

// Get exam full list
export const Get_parent_Student_Exam = gql`
  query getExam($section_id: Int!) {
    getExam(section_id: $section_id) {
      id
      name
      status
      section {
        name
        grade {
          gradeName
        }
      }
      exam_timetable {
        id
        exam_id
        syllabus
        subject_id
        location
        marks
        start_calendar {
          datetime
        }
        end_calendar {
          datetime
        }
      }
    }
  }
`;

// getExamSubjectandTimetable on create update exam

export const GetExam_Subject_And_Timetable = gql`
  query GetExamSubjectandTimetable($exam_id: Int!) {
    getExamSubjectandTimetable(exam_id: $exam_id) {
      id
      start_calendar {
        datetime
      }
      end_calendar {
        datetime
      }
      syllabus
      subject {
        id
        name
      }
      location
      marks
    }
  }
`;

// edit period data
export const Update_status_admissionintrest = gql`
  mutation UpdateAdmissionEnquiry($id: Int!, $status: String!) {
    updateAdmissionEnquiry(id: $id, status: $status) {
      message
    }
  }
`;
// reset password
export const Reset_Password_By_User = gql`
  query ResetPasswordByUser(
    $login_id: String!
    $old_password: String!
    $new_password: String!
  ) {
    resetPasswordByUser(
      login_id: $login_id
      old_password: $old_password
      new_password: $new_password
    ) {
      message
      errorCode
    }
  }
`;

//////timetable

export const Get_Class_Time_Table = gql`
  query GetClassTimetable(
    $institution_id: Int!
    $section_id: Int!
    $start_date: String!
    $end_date: String!
    $day: Int!
  ) {
    getClassTimetable(
      institution_id: $institution_id
      section_id: $section_id
      start_date: $start_date
      end_date: $end_date
      day: $day
    ) {
      period_name
      id
      start_time
      end_time

      location {
        id
        url
        mode
        name
        meeting_info
      }

      class_mode

      subject {
        id
        name
      }

      employee {
        name {
          first_name
        }
      }
    }
  }
`;

// get  invoice template data single one
export const GET_StudentList_by_SectionID = gql`
  query GetStudentListBySectionId($section_id: Int!) {
    getStudentListBySectionId(section_id: $section_id) {
      id

      status
      roll_number
      transport_stop {
        transport_route {
          route_name
        }
        stop_name
      }
      transport_pickup {
        transport_route {
          route_name
        }
        stop_name
      }
      section {
        name
        grade {
          gradeName
        }
      }
      student_profile {
        email
        id
        joining_date
        birth_date
        gender
        blood_group
        nationality
        religion
        weight
        sibling_relation
        name {
          first_name
          last_name
          middle_name
        }
      }
    }
  }
`;

export const Student_Question_Submission = gql`
  mutation addStudentSubmission(
    $student_assignment_id: Int!
    $assignment_question_id: Int!
    $assignment_id: Int!
    $answers: [answer!]!
  ) {
    addStudentSubmission(
      student_assignment_id: $student_assignment_id
      assignment_question_id: $assignment_question_id
      assignment_id: $assignment_id
      answers: $answers
    ) {
      message
    }
  }
`;
//Get All Student Leave Request for teacher
export const Get_Student_Leaves = gql`
  query GetStudentLeaves($institution_id: Int!) {
    getStudentLeaves(institution_id: $institution_id) {
      id
      status
      student {
        section {
          name
          grade {
            gradeName
          }
        }
        student_profile {
          name {
            first_name
            middle_name
            last_name
          }
        }
      }
      from_date
      to_date
      applied_date
      approved_date
      hours
      leave_type
      notes
      documents {
        name
        type
        reference_id
        doc_reference_schema
        path
        filename
      }
      leave_category {
        hours
        name
        description
      }
    }
  }
`;
// add time table template --------------------------
export const Add_TimeTable_Template = gql`
  mutation AddTimeTableTemplate($institution_id: Int!, $name: String!) {
    addTimeTableTemplate(institution_id: $institution_id, name: $name) {
      message
      id
    }
  }
`;

//get time Table Template
export const Get_TimeTable_Template = gql`
  query GetTimeTableTemplate($institution_id: Int!) {
    getTimeTableTemplate(institution_id: $institution_id) {
      id
      name
    }
  }
`;

//update time table teamplate
export const Update_timeTableTemplate = gql`
  mutation UpdateTimeTableTemplate(
    $id: Int!
    $name: String!
    $institution_id: Int!
  ) {
    updateTimeTableTemplate(
      id: $id
      name: $name
      institution_id: $institution_id
    ) {
      message
    }
  }
`;

// DELETE time table template
export const Delete_timeTable_template = gql`
  mutation DeleteTimeTableTemplate($id: Int!) {
    deleteTimeTableTemplate(id: $id) {
      message
    }
  }
`;

// to get GetPeriodTemplateBySectionID
export const Get_PeroidTimeTable = gql`
  query GetPeriodTemplate($timetable_template_id: Int!) {
    getPeriodTemplate(timetable_template_id: $timetable_template_id) {
      id
      start_time
      end_time
      period_name
    }
  }
`;

//add time Table
export const Add_Period_Template = gql`
  mutation AddPeriodTemplate(
    $timetable_template_id: Int!
    $period_name: String!
    $start_time: String!
    $end_time: String!
  ) {
    addPeriodTemplate(
      timetable_template_id: $timetable_template_id
      period_name: $period_name
      start_time: $start_time
      end_time: $end_time
    ) {
      message
      id
    }
  }
`;

// delete  periods single one
export const Delete_Periods_Template = gql`
  mutation DeletePeriodTemplate($id: Int!) {
    deletePeriodTemplate(id: $id) {
      message
    }
  }
`;

// edit  periods single one
export const Edit_Periods_Template = gql`
  mutation UpdatePeriodTemplate(
    $id: Int!
    $timetable_template_id: Int!
    $institution_id: Int!
    $period_name: String!
    $start_time: String!
    $end_time: String!
  ) {
    updatePeriodTemplate(
      id: $id
      timetable_template_id: $timetable_template_id
      institution_id: $institution_id
      period_name: $period_name
      start_time: $start_time
      end_time: $end_time
    ) {
      message
    }
  }
`;

// to get teacher list by section id
export const Get_Teacher_list_by_SEctionID = gql`
  query GetTeacherListBySectionId($section_id: Int!) {
    getTeacherListBySectionId(section_id: $section_id) {
      employee {
        id
        joining_date
        blood_group
        gender
        name {
          first_name
          middle_name
          last_name
        }
      }
    }
  }
`;

// to get get ALl leave request
export const Get_All_Leave__Request = gql`
  query GetAllLeaveRequest {
    getAllLeaveRequest {
      id
      from_date
      to_date
      applied_date
      approved_date
      leave_category_id
      leave_type
      notes
      status
      leave_category {
        name
        description
        hours
        institution_id
      }
    }
  }
`;

//////////////// Get Section assiggment to my assignment

export const Get_SectionList_By_Assignment = gql`
  query GetClassAssignmentbyAssigmentId($assignment_id: Int!) {
    getClassAssignmentbyAssigmentId(assignment_id: $assignment_id) {
      id
      assignment {
        id
        name
        description
        total_score
      }
      section {
        id
        name
        grade {
          id
          gradeName
        }
      }
      start_date
      end_date
      status
      remarks
      score
    }
  }
`;

// edit  periods single one
export const Assign_Assigment_ToAClassSection = gql`
  mutation AssignAssigmentToAClassSection(
    $assignment_id: Int!
    $section_id: Int!
    $start_date: String!
    $end_date: String!
  ) {
    AssignAssigmentToAClassSection(
      assignment_id: $assignment_id
      section_id: $section_id
      start_date: $start_date
      end_date: $end_date
    ) {
      message
    }
  }
`;

// to get getStudentListByAssignmentId
export const Get_StudentList_By_AssignmentId = gql`
  query GetStudentListByAssignmentId($assignment_id: Int!) {
    getStudentListByAssignmentId(assignment_id: $assignment_id) {
      id
      status
      remarks
      score
      student {
        id
        roll_number
        student_profile {
          name {
            first_name
            last_name
          }
        }
      }
    }
  }
`;

// to get getStudentListByAssignmentId
export const Get_Assignment_Submission = gql`
  query GetAssignmentSubmission(
    $assignment_id: Int!
    $assignment_question_id: Int!
    $user_id: Int!
  ) {
    getAssignmentSubmission(
      assignment_id: $assignment_id
      assignment_question_id: $assignment_question_id
      user_id: $user_id
    ) {
      id
      student_assignment_id
      assignment_question {
        description
        question_type
        answer
        marks
        question_number
        question_section {
          name
          description
        }
        parent_question {
          description
          question_type
          answer
          marks
          question_number
        }
      }
      assignment_id
      answer
      teacher_marks
      document_id
      remarks
    }
  }
`;

// edit  periods single one

export const Approve_LeaveRequestByApproverIdAndId = gql`
  mutation AapproveLeaveRequestByApproverIdAndId(
    $id: Int!
    $approver_id: Int!
    $institution_id: Int!
  ) {
    approveLeaveRequestByApproverIdAndId(
      id: $id
      approver_id: $approver_id
      institution_id: $institution_id
    ) {
      message
    }
  }
`;

// Create Exam Api

export const Create_Exam = gql`
  mutation AddExam($name: String!, $section_id: Int!) {
    addExam(name: $name, section_id: $section_id) {
      message
      id
      name
      section_id
    }
  }
`;

// Create exam and subject
export const Add_Exam_Subject_and_Timetable = gql`
  mutation AddExamSubjectandTimetable(
    $institution_id: Int!
    $syllabus: String!
    $subject_id: Int!
    $location: String!
    $marks: Int!
    $exam_mode: String!
    $exam_id: Int!
    $start_time: String!
    $end_time: String!
    $day: String!
  ) {
    addExamSubjectandTimetable(
      institution_id: $institution_id
      syllabus: $syllabus
      subject_id: $subject_id
      location: $location
      marks: $marks
      exam_mode: $exam_mode
      exam_id: $exam_id
      start_time: $start_time
      end_time: $end_time
      day: $day
    ) {
      message
    }
  }
`;
// export const Create_Exam = gql`
//   mutation AddExam(
// 		$institution_id: Int!
// 			$syllabus: String!
// 			$subject_id: Int!
// 			$location: String!
// 			$marks: Int!
// 			$exam_mode: String!
// 			$day: String!
// 			$name: String!
// 			$section_id: Int!
// 			$start_time:String!
// 			$end_time:String!
//   ) {
//     addExam(
// 				institution_id: $institution_id
// 				syllabus: $syllabus
// 				subject_id: $subject_id
// 				location:  $location
// 				marks: $marks
// 				exam_mode: $exam_mode
// 				day: $day
// 				name: $name
// 				section_id: $section_id
// 				start_time: $start_time
// 				end_time: $end_time
//     ) {
//       message
//       id
//     }
//   }
// `;

export const Get_Question_choice = gql`
  query GetAssignmentChoicesByQuestionId($assignment_question_id: Int!) {
    getAssignmentChoicesByQuestionId(
      assignment_question_id: $assignment_question_id
    ) {
      id
      choice
    }
  }
`;

//Update Event
export const Update_Event = gql`
  mutation UpdateEvent(
    $id: Int!
    $event_name: String!
    $start_date: String!
    $end_date: String!
    $organizer_id: Int!
    $publish_date: String!
    $description: String!
    $location: String!
    $expiry_date: String!
    $content: String!
    $event_doc: [event_doc!]
  ) {
    updateEvent(
      id: $id
      event_name: $event_name
      start_date: $start_date
      end_date: $end_date
      organizer_id: $organizer_id
      publish_date: $publish_date
      description: $description
      location: $location
      expiry_date: $expiry_date
      content: $content
      event_doc: $event_doc
    ) {
      message
    }
  }
`;

// delete  Examination Subject Time tablee
export const Delete_Exam_Timetable = gql`
  mutation DeleteExamTimetable($id: Int!) {
    deleteExamTimetable(id: $id) {
      message
    }
  }
`;
//  Make Assignnmet start to progress
export const In_Progress_Assignment = gql`
  mutation InProgressAssignment($assignment_id: Int!, $user_id: Int!) {
    inProgressAssignment(assignment_id: $assignment_id, user_id: $user_id) {
      message
    }
  }
`;

//  Make Assignment complete
export const Submit_Assignment_Student = gql`
  mutation SubmitAssignment($assignment_id: Int!, $user_id: Int!) {
    submitAssignment(assignment_id: $assignment_id, user_id: $user_id) {
      message
    }
  }
`;
export const Update_Assignment_Submission = gql`
  mutation UpdateAssignmentSubmission(
    $student_assignment_id: Int!
    $assignment_question_id: Int!
    $assignment_id: Int!
    $teacher_marks: Int!
    $remarks: String!
  ) {
    updateAssignmentSubmission(
      student_assignment_id: $student_assignment_id
      assignment_question_id: $assignment_question_id
      assignment_id: $assignment_id
      teacher_marks: $teacher_marks
      remarks: $remarks
    ) {
      message
    }
  }
`;

export const Get_ExamResult_BySubjectAndExamId = gql`
  query GetExamResultBySubjectAndExamId($exam_id: Int!, $subject_id: Int!) {
    getExamResultBySubjectAndExamId(
      exam_id: $exam_id
      subject_id: $subject_id
    ) {
      start_calendar {
        datetime
        day
      }
      end_calendar {
        datetime
        day
      }
      exam_id
      syllabus
      location
      marks
      exam_result {
        marks
        student {
          roll_number
          student_profile {
            name {
              first_name
              middle_name
              last_name
            }
          }
        }
      }
    }
  }
`;

// delete  Examination By teacher
export const Delete_Exam = gql`
  mutation DeleteExam($id: Int!) {
    deleteExam(id: $id) {
      message
    }
  }
`;
// Update Exam Name
export const Update_Exam_Name = gql`
  mutation UpdateExam($id: Int!, $name: String!, $section_id: Int!) {
    updateExam(id: $id, name: $name, section_id: $section_id) {
      message
    }
  }
`;
// update exam subject time table
export const Update_Exam_Timetable = gql`
  mutation UpdateExamTimetable(
    $id: Int!
    $start_datetime: String!
    $end_datetime: String!
    $day: String!
    $name: String!
    $syllabus: String!
    $subject_id: Int!
    $location: String!
    $marks: Int!
    $exam_mode: String!
  ) {
    updateExamTimetable(
      id: $id
      start_datetime: $start_datetime
      end_datetime: $end_datetime
      day: $day
      name: $name
      syllabus: $syllabus
      subject_id: $subject_id
      location: $location
      marks: $marks
      exam_mode: $exam_mode
    ) {
      message
    }
  }
`;

// to get studentlist from report page
export const Get_Student_list_By_sectionId = gql`
  query GetStudentListBySectionId($section_id: Int!) {
    getStudentListBySectionId(section_id: $section_id) {
      status
      roll_number
      transport_stop {
        transport_route {
          route_name
        }
        stop_name
      }
      transport_pickup {
        transport_route {
          route_name
        }
        stop_name
      }
      section {
        id
        name
        grade {
          gradeName
        }
      }
      student_profile {
        id
        joining_date
        birth_date
        gender
        blood_group
        nationality
        religion
        weight
        sibling_relation
        name {
          first_name
          last_name
          middle_name
        }
      }
    }
  }
`;
export const Get_All_Staff_Details = gql`
  query getEmployeeByDepartmentAndDesignationId(
    $department_id: Int!
    $designation_id: Int!
  ) {
    getEmployeeByDepartmentAndDesignationId(
      department_id: $department_id
      designation_id: $designation_id
    ) {
      id
      passport_identity {
        encrypted_id
        expiry_date
      }
      tax_identity {
        encrypted_id
      }
      national_identity {
        encrypted_id
      }
      passport {
        filename
        name
        path
        type
      }
      certificate {
        filename
        name
        path
        type
      }
      others {
        filename
        name
        path
        type
      }
      department {
        id
        name
      }
      designation {
        id
        name
      }
      joining_date
      name {
        first_name
        middle_name
        last_name
      }
      email
      birth_date
      gender
      phone
      blood_group
      nationality

      religion
      marital_status
      spouseName {
        first_name
        middle_name
        last_name
      }
      motherName {
        first_name
        middle_name
        last_name
      }
      fatherName {
        first_name
        middle_name
        last_name
      }
      currentAddress {
        line1
        line2
        city
        state
        zip_code
        country
      }
      permanentAddress {
        line1
        line2
        city
        state
        zip_code
        country
      }
      education_qualifications {
        course_name
        university_name
        start_date
        end_date
      }

      birth_cert {
        name
        type
        reference_id
        doc_reference_schema
        path
        filename
      }
      photo {
        name
        type
        reference_id
        doc_reference_schema
        path
        filename
      }

      tax {
        name
        type
        reference_id
        doc_reference_schema
        path
        filename
      }
      login {
        login_id
        display_id
      }
    }
  }
`;

// to get employee data on id basis
export const Get_Id_based_Employee_details = gql`
  query GetEmployeeById($id: Int!) {
    getEmployeeById(id: $id) {
      status
      department {
        name
      }
      designation {
        name
      }
      joining_date
      name {
        first_name
        middle_name
        last_name
      }
      birth_date
      gender
      phone
      email
      blood_group
      nationality
      passport_id
      tax_id
      national_id
      religion
      marital_status
      spouseName {
        first_name
        middle_name
        last_name
      }
      motherName {
        first_name
        middle_name
        last_name
      }
      fatherName {
        first_name
        middle_name
        last_name
      }
      currentAddress {
        line1
        line2
        city
        state
        zip_code
        country
      }
      permanentAddress {
        line1
        line2
        city
        state
        zip_code
        country
      }
      education_qualifications {
        course_name
        university_name
        start_date
        end_date
      }
      passport_number
      passport_expiry_date
      tax_pancard_number
      login {
        login_id
        display_id
      }
      photo {
        path
      }
      birth_cert {
        path
      }
      tax {
        path
      }
    }
  }
`;

//
// Make Assignment Complete
export const Make_Assignment_Complete_By_Teacher = gql`
  mutation CompleteAssignment(
    $remarks: String!
    $score: Int!
    $assignment_id: Int!
    $student_assignment_id: Int!
  ) {
    completeAssignment(
      remarks: $remarks
      score: $score
      assignment_id: $assignment_id
      student_assignment_id: $student_assignment_id
    ) {
      message
    }
  }
`;
//  Delete  Leave By teacher
export const Teacher_Delete_His_LeaveRequest = gql`
  mutation DeleteLeaveRequestByEmployeeId($id: Int!) {
    deleteLeaveRequestByEmployeeId(id: $id) {
      message
    }
  }
`;

// Reject Leave By teacher
export const Reject_Student_Leave = gql`
  mutation CancelLeaveRequestByRequestId(
    $id: Int!
    $institution_id: Int!
    $rejector_id: Int!
  ) {
    cancelLeaveRequestByRequestId(
      id: $id
      institution_id: $institution_id
      rejector_id: $rejector_id
    ) {
      message
    }
  }
`;

//add invoice

export const Add_Invoice = gql`
  mutation AddInvoice(
    $institution_id: Int!
    $academic_session_id: Int!
    $due_date: String!
    $amount: String!
    $name: String!
    $recurrence: String!
    $description: String!
    $currency_code: String!
    $invoice_feeitem: [invoice_feeitem!]!
  ) {
    addInvoice(
      institution_id: $institution_id
      academic_session_id: $academic_session_id
      due_date: $due_date
      amount: $amount
      name: $name
      recurrence: $recurrence
      description: $description
      currency_code: $currency_code
      invoice_feeitem: $invoice_feeitem
    ) {
      id
      message
    }
  }
`;

// upload file
export const Upload_document_file = gql`
  mutation singleUpload($file: Upload!) {
    singleUpload(file: $file) {
      success
    }
  }
`;

export const Add_Invoice_Template_Fee = gql`
  mutation AddInvoiceTemplateFeeItems(
    $invoice_template_id: Int!
    $fee_subtype_id: Int!
    $amount: String!
    $tax: String!
  ) {
    addInvoiceTemplateFeeItems(
      invoice_template_id: $invoice_template_id
      fee_subtype_id: $fee_subtype_id
      amount: $amount
      tax: $tax
    ) {
      message
      id
    }
  }
`;
export const Get_Staff_TimeTable = gql`
  query getInvoiceTemplateFeeItems($employee_id: Int!, $day: Int!) {
    getTimetableBYEmployeeId(employee_id: $employee_id, day: $day) {
      location
      subject_id
      is_class_teacher
      period_name
      start_time
      end_time
    }
  }
`;
export const Get_Invoice_Fee_Items = gql`
  query GetInvoiceTemplateFeeItems($invoice_template_id: Int!) {
    getInvoiceTemplateFeeItems(invoice_template_id: $invoice_template_id) {
      id
      feesubtype {
        id
        name
        description
      }
      amount
      tax
      status
    }
  }
`;
export const Delete_Invoice_Fee_Items = gql`
  mutation DeleteInvoiceTemplateFeeItems($id: Int!) {
    deleteInvoiceTemplateFeeItems(id: $id) {
      message
    }
  }
`;
export const Update_Invoice_Fee = gql`
  mutation UpdateInvoiceTemplateFeeItems(
    $fee_subtype_id: Int!
    $id: Int!
    $tax: String!
    $amount: String!
  ) {
    updateInvoiceTemplateFeeItems(
      id: $id
      tax: $tax
      amount: $amount
      fee_subtype_id: $fee_subtype_id
    ) {
      message
    }
  }
`;
export const Create_Stop_Route = gql`
  mutation AddTransportStop($transport_route_id: Int!, $stop_name: String!) {
    addTransportStop(
      transport_route_id: $transport_route_id
      stop_name: $stop_name
    ) {
      id
    }
  }
`;

export const Get_Stop_Route_Name = gql`
  query getTransportStop($transport_route_id: Int!) {
    getTransportStop(transport_route_id: $transport_route_id) {
      id
      stop_name
    }
  }
`;
export const Delete_Tranport_Stop_Name = gql`
  mutation deleteTransportStop($id: Int!) {
    deleteTransportStop(id: $id) {
      message
    }
  }
`;

export const GET_Student_List_Transport_Basis = gql`
  query GetStudentListByTranportId(
    $transport_pickup_stop_id: Int!
    $transport_drop_stop_id: Int
  ) {
    getStudentListByTranportId(
      transport_pickup_stop_id: $transport_pickup_stop_id
      transport_drop_stop_id: $transport_drop_stop_id
    ) {
      id
      roll_number
      status
      transport_pickup {
        stop_name
      }
      transport_stop {
        stop_name
      }
      section {
        id
        name
      }
      student_profile {
        id
        name {
          first_name
          middle_name
          last_name
        }
      }
    }
  }
`;
// to assign student transport
export const Assign_Student_Transport = gql`
  mutation AssignStudentTransport(
    $id: Int!
    $transport_pickup_stop_id: Int!
    $transport_drop_stop_id: Int!
  ) {
    assignStudentTransport(
      id: $id
      transport_pickup_stop_id: $transport_pickup_stop_id
      transport_drop_stop_id: $transport_drop_stop_id
    ) {
      message
    }
  }
`;

// create or update institution
export const Publish_Attendence = gql`
  mutation AddAttendance(
    $attendance_type: String!
    $reference_id: Int!
    $date: String!
    $user_id: Int!
  ) {
    addAttendance(
      attendance_type: $attendance_type
      reference_id: $reference_id
      date: $date
      user_id: $user_id
    ) {
      message
      id
    }
  }
`;

//  update transport route
export const Update_Transport_Route = gql`
  mutation UpdateTransportRoute(
    $id: Int!
    $route_name: String!
    $start_point: String!
    $end_point: String!
    $driver_name: driver_name
    $driver_phone_number: String!
    $vehicle_owner_name: vehicle_owner_name
    $vehicle_type: String!
    $vehicle_registered_number: String!
    $max_capacity: Int!
    $route_url: String!
    $start_time: String!
    $end_time: String!
  ) {
    updateTransportRoute(
      id: $id
      route_name: $route_name
      start_point: $start_point
      end_point: $end_point
      driver_name: $driver_name
      driver_phone_number: $driver_phone_number
      vehicle_owner_name: $vehicle_owner_name
      vehicle_type: $vehicle_type
      vehicle_registered_number: $vehicle_registered_number
      max_capacity: $max_capacity
      route_url: $route_url
      start_time: $start_time
      end_time: $end_time
    ) {
      message
    }
  }
`;
export const Get_Invoice_Latest = gql`
  query GetInvoice($institution_id: Int!, $academic_session_id: Int) {
    getInvoice(
      institution_id: $institution_id
      academic_session_id: $academic_session_id
    ) {
      id
      create_date
      due_date
      amount
      name
      recurrence
      description
      currency_code
      invoice_fee_items {
        id
        fee_subtype_id
        amount
        tax
        derived_total_cost
      }
    }
  }
`;
//  delete invoice
export const Delete_Invoice_Data = gql`
  mutation DeleteInvoice($id: Int!) {
    deleteInvoice(id: $id) {
      message
    }
  }
`;

//  delete invoice fee template
export const Delete_Invoice_Template_Data = gql`
  mutation DeleteInvoiceTemplate($id: Int!) {
    deleteInvoiceTemplate(id: $id) {
      message
    }
  }
`;
//  assign invoice to class
export const Assign_Invoice_To_Class = gql`
  mutation AssignInvoiceToClass(
    $invoice_id: Int!
    $due_date: String!
    $amount: String!
    $recurrence: String!
    $section_id: Int!
  ) {
    assignInvoiceToClass(
      invoice_id: $invoice_id
      due_date: $due_date
      amount: $amount
      recurrence: $recurrence
      section_id: $section_id
    ) {
      message
    }
  }
`;

// get assigned invocie list--------------
export const Get_Assigned_Invoice_list = gql`
  query getAssignInvoice($invoice_id: Int!) {
    getAssignInvoice(invoice_id: $invoice_id) {
      section {
        name
        grade {
          gradeName
        }
      }
      status
      id
    }
  }
`;
// to assign timetable
export const Add_Timetable = gql`
  mutation AddTimetable(
    $institution_id: Int!
    $section_id: Int!
    $period_template_id: Int!
    $start_date: String!
    $end_date: String!
    $timetable_template_id: Int!
  ) {
    addTimetable(
      institution_id: $institution_id
      section_id: $section_id
      period_template_id: $period_template_id
      start_date: $start_date
      end_date: $end_date
      timetable_template_id: $timetable_template_id
    ) {
      message
    }
  }
`;
// to assign teacher

export const Assign_Subject_To_Teacher = gql`
  mutation AssignSubjectToTeacher(
    $id: Int!
    $employee_id: Int!
    $location_id: Int!
    $subject_id: Int!
    $is_class_teacher: Int!
  ) {
    assignSubjectToTeacher(
      id: $id
      employee_id: $employee_id
      location_id: $location_id
      subject_id: $subject_id
      is_class_teacher: $is_class_teacher
    ) {
      message
    }
  }
`;
// get list of child for admission--------------
export const Get_Child_List_For_Addmission = gql`
  query GetAdmissionEnquiryByMail($institution_id: Int!, $email: String) {
    getAdmissionEnquiryByMail(institution_id: $institution_id, email: $email) {
      id
      update_time
      fatherName {
        first_name
        middle_name
        last_name
      }
      siblingName {
        first_name
        middle_name
        last_name
      }
      studentName {
        first_name
        middle_name
        last_name
      }
      student_birth_date
      academic_session
      grade
      contact_number
      email
      referee
      sibling_class
      comment
      status
    }
  }
`;
// api to promote student-------------------
export const Promote_Student_API = gql`
  mutation UpdateStudentStatus(
    $studentID: [studentID!]!
    $status: String!
    $section_id: Int!
  ) {
    updateStudentStatus(
      studentID: $studentID
      status: $status
      section_id: $section_id
    ) {
      message
    }
  }
`;

// get student Attendance--------------
export const get_student_Attendance_By_ID = gql`
  query GetStudentAttendanceById(
    $user_id: Int!
    $start_date: String
    $end_date: String
    $attendance_type: String
  ) {
    getStudentAttendanceById(
      user_id: $user_id
      start_date: $start_date
      end_date: $end_date
      attendance_type: $attendance_type
    ) {
      date

      student {
        section_id
        roll_number
        student_profile {
          name {
            first_name
            middle_name
            last_name
          }
        }
      }
    }
  }
`;

// get attendance by section id for report
export const Get_Attendance_By_SectionId = gql`
  query GetAttendanceBySection(
    $start_date: String!
    $end_date: String!
    $attendance_type: String!
    $section_id: Int!
  ) {
    getAttendanceBySection(
      start_date: $start_date
      end_date: $end_date
      attendance_type: $attendance_type
      section_id: $section_id
    ) {
      message
      student_profile {
        id
        name {
          first_name
          middle_name
          last_name
        }
      }
      attendances {
        date
        user_id
        user_type
      }
      roll_number
    }
  }
`;

// add Notice
export const Add_School_Notice_Data = gql`
  mutation AddNoticeBoard(
    $institution_id: Int!
    $title: String!
    $subject: String!
    $notice_type: String!
    $section_id: Int!
    $publisher_id: Int!
    $publisher_type: String!
    $publish_date: String!
    $expiry_date: String!
    $location: String!
    $content: String!
    $notice_board_doc: [notice_board_doc!]
  ) {
    addNoticeBoard(
      institution_id: $institution_id
      title: $title
      subject: $subject
      notice_type: $notice_type
      section_id: $section_id
      publisher_id: $publisher_id
      publisher_type: $publisher_type
      publish_date: $publish_date
      expiry_date: $expiry_date
      location: $location
      content: $content
      notice_board_doc: $notice_board_doc
    ) {
      message
    }
  }
`;

//  update Notice
export const Update_Notice_Data = gql`
  mutation UpdateNoticeBoard(
    $id: Int!
    $institution_id: Int!
    $title: String!
    $subject: String!
    $notice_type: String!
    $section_id: Int!
    $publisher_id: Int!
    $publish_date: String!
    $expiry_date: String!
    $location: String!
    $content: String!
    $notice_board_doc: [notice_board_doc!]
  ) {
    updateNoticeBoard(
      id: $id
      institution_id: $institution_id
      title: $title
      subject: $subject
      notice_type: $notice_type
      section_id: $section_id
      publisher_id: $publisher_id
      publish_date: $publish_date
      expiry_date: $expiry_date
      location: $location
      content: $content
      notice_board_doc: $notice_board_doc
    ) {
      message
    }
  }
`;

export const Teacher_Mark_Attendace_API = gql`
  mutation addAttendance(
    $attendance_type: String!
    $reference_id: Int!
    $date: String!
    $user_id: [user]
  ) {
    addAttendance(
      attendance_type: $attendance_type
      reference_id: $reference_id
      date: $date
      user_id: $user_id
    ) {
      message
    }
  }
`;

// to upload  Student data in bulk
export const Bulk_Upload_Student_API = gql`
  mutation StudentBulkUpload(
    $section_id: Int!
    $institution_id: Int!
    $path: String!
    $filename: String!
    $type: String!
    $name: String!
  ) {
    studentBulkUpload(
      section_id: $section_id
      institution_id: $institution_id
      path: $path
      filename: $filename
      type: $type
      name: $name
    ) {
      message
      errorCode
      row_id
    }
  }
`;

// to upload Employee data in bulk
export const Bulk_Upload_Employee_API = gql`
  mutation EmployeeBulkUpload(
    $institution_id: Int!
    $path: String!
    $filename: String!
    $type: String!
    $name: String!
  ) {
    employeeBulkUpload(
      institution_id: $institution_id
      path: $path
      filename: $filename
      type: $type
      name: $name
    ) {
      message
      errorCode
      row_id
    }
  }
`;

// to withdraw students
export const WithDraw_Students_API = gql`
  mutation WithdrawStudent($id: Int!) {
    withdrawStudent(id: $id) {
      message
    }
  }
`;

// get get assign teacher id
export const Get_Id_For_Teacher = gql`
  query GetClassTimetableID(
    $institution_id: Int!
    $section_id: Int!
    $date: String!
  ) {
    getClassTimetableID(
      institution_id: $institution_id
      section_id: $section_id
      date: $date
    ) {
      id
    }
  }
`;

// to assing teacher subject -------
export const Assign_Teacher_API = gql`
  mutation AssignTeacherLocationAndSubjectToPeriod(
    $employee_id: Int!
    $location_id: Int!
    $subject_id: Int!
    $is_class_teacher: Int!
    $class_mode: String!
    $class_timetable_id: Int!
    $period_name: String!
  ) {
    assignTeacherLocationAndSubjectToPeriod(
      employee_id: $employee_id
      location_id: $location_id
      subject_id: $subject_id
      is_class_teacher: $is_class_teacher
      class_mode: $class_mode
      class_timetable_id: $class_timetable_id
      period_name: $period_name
    ) {
      message
    }
  }
`;
// update transport stop point

export const Update_Transport_Stop_API = gql`
  mutation UpdateTransportStop($id: Int!, $stop_name: String!) {
    updateTransportStop(id: $id, stop_name: $stop_name) {
      message
    }
  }
`;

// update student form

export const Update_StudentForm_API = gql`
  mutation UpdateStudent(
    $id: Int!
    $status: String!
    $Father_nationality: String!
    $Father_email_address: String!
    $father_passport_number: String!
    $father_passport_expiry_date: String!
    $Father_occupation: String!
    $Father_phone_number: String!
    $Father_national_id_number: String!
    $Father_annual_income: String!
    $Father_qualification_id: Int!
    $Mother_nationality: String!
    $Mother_email_address: String!
    $mother_passport_number: String!
    $mother_passport_expiry_date: String!
    $Mother_occupation: String!
    $Mother_phone_number: String!
    $Mother_national_id_number: String!
    $Mother_annual_income: String!
    $Mother_qualification_id: Int!
    $Gardian_nationality: String!
    $Gardian_email_address: String!
    $gardian_passport_number: String!
    $gardian_passport_expiry_date: String!
    $Gardian_occupation: String!
    $Gardian_phone_number: String!
    $Gardian_national_id_number: String!
    $Gardian_annual_income: String
    $Gardian_qualification_id: Int!
    $academic_session_id: Int!
    $email: String!
    $grade_id: Int!
    $section_id: Int!
    $roll_number: String!
    $Student_first_name: String!
    $Student_middle_name: String!
    $Student_last_name: String!
    $institution_id: Int!
    $joining_date: String!
    $gender: String!
    $birth_date: String!
    $Current_line1: String!
    $Current_line2: String!
    $Current_city: String!
    $Current_state: String!
    $Current_zip_code: Int!
    $Current_country: String!
    $Permanent_line1: String!
    $Permanent_line2: String!
    $Permanent_city: String!
    $Permanent_state: String!
    $Permanent_zip_code: Int!
    $Permanent_country: String!
    $blood_group: String!
    $S_nationality: String!
    $passport_number: String!
    $passport_expiry_date: String!
    $national_id_number: String!
    $religion: String!
    $height: Int!
    $weight: Int!
    $sibling_id: Int!
    $sibling_relation: String!
    $Father_first_name: String!
    $Father_middle_name: String!
    $Father_last_name: String!
    $Mother_first_name: String!
    $Mother_middle_name: String!
    $Mother_last_name: String!
    $Gardian_first_name: String!
    $Gardian_middle_name: String!
    $Gardian_last_name: String!
    $photo: photo1
    $national: national1
    $tax: tax1
    $birth_cert: birth_cert1
  ) {
    updateStudent(
      id: $id
      status: $status
      Father_nationality: $Father_nationality
      Father_email_address: $Father_email_address
      father_passport_number: $father_passport_number
      father_passport_expiry_date: $father_passport_expiry_date
      Father_occupation: $Father_occupation
      Father_phone_number: $Father_phone_number
      Father_national_id_number: $Father_national_id_number
      Father_annual_income: $Father_annual_income
      Father_qualification_id: $Father_qualification_id

      Mother_nationality: $Mother_nationality
      Mother_email_address: $Mother_email_address
      mother_passport_number: $mother_passport_number
      mother_passport_expiry_date: $mother_passport_expiry_date
      Mother_occupation: $Mother_occupation
      Mother_phone_number: $Mother_phone_number
      Mother_national_id_number: $Mother_national_id_number
      Mother_annual_income: $Mother_annual_income
      Mother_qualification_id: $Mother_qualification_id

      Gardian_nationality: $Gardian_nationality
      Gardian_email_address: $Gardian_email_address
      gardian_passport_number: $gardian_passport_number
      gardian_passport_expiry_date: $gardian_passport_expiry_date
      Gardian_occupation: $Gardian_occupation
      Gardian_phone_number: $Gardian_phone_number
      Gardian_national_id_number: $Gardian_national_id_number
      Gardian_annual_income: $Gardian_annual_income
      Gardian_qualification_id: $Gardian_qualification_id

      academic_session_id: $academic_session_id
      email: $email
      grade_id: $grade_id
      section_id: $section_id
      roll_number: $roll_number

      Student_first_name: $Student_first_name
      Student_middle_name: $Student_middle_name
      Student_last_name: $Student_last_name

      institution_id: $institution_id

      joining_date: $joining_date
      gender: $gender
      birth_date: $birth_date

      Current_line1: $Current_line1
      Current_line2: $Current_line2
      Current_city: $Current_city
      Current_state: $Current_state
      Current_zip_code: $Current_zip_code
      Current_country: $Current_country

      Permanent_line1: $Permanent_line1
      Permanent_line2: $Permanent_line2
      Permanent_city: $Permanent_city
      Permanent_state: $Permanent_state
      Permanent_zip_code: $Permanent_zip_code
      Permanent_country: $Permanent_country

      blood_group: $blood_group
      S_nationality: $S_nationality

      passport_number: $passport_number
      passport_expiry_date: $passport_expiry_date
      national_id_number: $national_id_number
      religion: $religion
      height: $height
      weight: $weight
      sibling_id: $sibling_id
      sibling_relation: $sibling_relation

      Father_first_name: $Father_first_name
      Father_middle_name: $Father_middle_name
      Father_last_name: $Father_last_name

      Mother_first_name: $Mother_first_name
      Mother_middle_name: $Mother_middle_name
      Mother_last_name: $Mother_last_name

      Gardian_first_name: $Gardian_first_name
      Gardian_middle_name: $Gardian_middle_name
      Gardian_last_name: $Gardian_last_name

      photo: $photo
      national: $national
      tax: $tax
      birth_cert: $birth_cert
    ) {
      message
    }
  }
`;
// get assigned student list
export const Get_Assign_Student_List = gql`
  query GetStudentByStatus($institution_id: Int!, $status: [status]) {
    getStudentByStatus(
      institution_id: $institution_id

      status: $status
    ) {
      id
      status
      roll_number
      transport_stop {
        transport_route {
          route_name
        }
        stop_name
      }
      transport_pickup {
        transport_route {
          route_name
        }
        stop_name
      }
      section {
        name
        grade {
          gradeName
        }
      }
      student_profile {
        id
        grade {
          id
          gradeName
        }
        joining_date
        birth_date
        gender
        blood_group
        nationality
        religion
        weight
        sibling_relation
        name {
          first_name
          last_name
          middle_name
        }
        mother {
          name {
            first_name
            last_name
            middle_name
          }
        }
      }
    }
  }
`;
// assign student
export const Assign_Section_Student_API = gql`
  mutation AssignSectionToStudent($id: [id!]!, $section_id: Int!) {
    assignSectionToStudent(id: $id, section_id: $section_id) {
      message
      id
      errorCode
    }
  }
`;
// assign roll no to students
export const Assign_RollNoTo_Students = gql`
  mutation AssignRollNumber($roll_numbers: [roll_numbers!]!) {
    assignRollNumber(roll_numbers: $roll_numbers) {
      message
    }
  }
`;

// add Notice
export const Add_Student_Exam_Result = gql`
  mutation AddExamResult($exam_timetable_id: Int!, $results: [results!]!) {
    addExamResult(exam_timetable_id: $exam_timetable_id, results: $results) {
      message
    }
  }
`;

// get assigned student list
export const Get_ClassAssignment_For_Teacher = gql`
  query GetClassTimetableForTeacher(
    $institution_id: Int!
    $userid: Int!
    $start_date: String!
    $end_date: String!
    $day: Int!
  ) {
    getClassTimetableForTeacher(
      institution_id: $institution_id
      userid: $userid
      start_date: $start_date
      end_date: $end_date
      day: $day
    ) {
      id
      section {
        name
        grade {
          gradeName
        }
      }
      timetables {
        id
        period_name
        start_time
        end_time

        location {
          id
          url
          mode
          name
          meeting_info
        }
        employee {
          name {
            first_name
            middle_name
            last_name
          }
        }
        subject {
          name
        }
        class_mode
      }
    }
  }
`;

// class invoice data
export const Get_Class_Invoice_API = gql`
  query GetClassInvoice($section_id: Int!) {
    getClassInvoice(section_id: $section_id) {
      status
      invoice {
        id
        create_date
        due_date
        name
        description
        currency_code
        invoice_fee_items {
          id
          fee_subtype_id
          amount
          tax
          derived_total_cost
          currency_code
        }
      }
    }
  }
`;

// edit  feesubtype single one
export const Assign_Roll_Number_To_Student = gql`
  mutation AssignRollnumberstoAClass($grade_id: Int!) {
    assignRollnumberstoAClass(grade_id: $grade_id) {
      message
    }
  }
`;

// class invoice data
export const Get_Current_CLass_For_Teacher = gql`
  query GetActivePeriodForTeacher(
    $user_id: Int!
    $institution_id: Int!
    $dateAndTime: String!
    $day: String!
    $time: String!
  ) {
    getActivePeriodForTeacher(
      user_id: $user_id
      institution_id: $institution_id
      dateAndTime: $dateAndTime
      day: $day
      time: $time
    ) {
      id
      start_date
      end_date
      institution_id
      name
      period_template_id
      timetable {
        period_name
        start_time
        end_time
        location {
          url
          mode
          name
          meeting_info
        }
        employee {
          name {
            first_name
          }
        }
        subject {
          name
        }
        class_mode
      }
    }
  }
`;

// class invoice data
export const Get_Current_CLass_By_SectionId = gql`
  query GetActivePeriod(
    $section_id: Int!
    $institution_id: Int!
    $dateAndTime: String!
    $day: String!
    $time: String!
  ) {
    getActivePeriod(
      section_id: $section_id
      institution_id: $institution_id
      dateAndTime: $dateAndTime
      day: $day
      time: $time
    ) {
      id
      start_date
      end_date
      institution_id
      name
      period_template_id
      timetable {
        period_name
        start_time
        end_time
        location {
          url
          mode
          name
          meeting_info
        }
        employee {
          name {
            first_name
          }
        }
        subject {
          name
        }
        class_mode
      }
    }
  }
`;

// delete  document
export const Delete_Document = gql`
  mutation DeleteDocuments($id: Int!) {
    deleteDocuments(id: $id) {
      message
    }
  }
`;
export const Create_User_Login_Data = gql`
  mutation CreateLoginDetailsForUser(
    $institution_id: Int!
    $user_data: [user_data!]!
    $organization_id: Int
  ) {
    createLoginDetailsForUser(
      institution_id: $institution_id
      user_data: $user_data
      organization_id: $organization_id
    ) {
      message
      errorCode
      id
    }
  }
`;

export const Add_Payment = gql`
  mutation AddPayment(
    $funding_instrument_type: String!
    $payment_date: String!
    $student_invoice_id: Int!
    $fi_source: String!
    $external_reference_number: String!
    $amount: String!
    $notes: String!
    $payment_doc: payment_doc
  ) {
    addPayment(
      funding_instrument_type: $funding_instrument_type
      payment_date: $payment_date
      student_invoice_id: $student_invoice_id
      fi_source: $fi_source
      external_reference_number: $external_reference_number
      amount: $amount
      notes: $notes
      payment_doc: $payment_doc
    ) {
      message
      id
      errorCode
    }
  }
`;

// delete class Time Table
export const delete_Class_TimeTable = gql`
  mutation DeleteTimetable($id: Int!) {
    deleteTimetable(id: $id) {
      message
    }
  }
`;

// Get_Student_Leave_Data_By_Dates
export const Get_Student_Leave_Data_by_Dates = gql`
  query GetLeaveRequestByUserId(
    $user_id: Int!
    $from_date: String!
    $to_date: String!
  ) {
    getLeaveRequestByUserId(
      user_id: $user_id
      from_date: $from_date
      to_date: $to_date
    ) {
      id
      status
      from_date
      to_date
      applied_date
      approved_date
      leave_category_id
      user_id
      hours
      leave_type
      notes
      documents {
        name
        path
        filename
        type
        reference_id
      }
      leave_category {
        hours
        name
        description
        institution_id
      }
    }
  }
`;

// delete class Time Table
export const DELETE_Class_Assign_Invoice = gql`
  mutation deleteClassInvoice($id: Int!) {
    deleteClassInvoice(id: $id) {
      message
    }
  }
`;

// create Leave Category
export const Create_Leave_Category = gql`
  mutation AddLeaveCategory(
    $institution_id: Int!
    $name: String
    $hours: Int!
    $description: String
  ) {
    addLeaveCategory(
      institution_id: $institution_id
      name: $name
      hours: $hours
      description: $description
    ) {
      message
      id
    }
  }
`;

// edit  section single one
export const Edit_Leave_Category = gql`
  mutation UpdateLeaveCategory(
    $id: Int!
    $name: String!
    $hours: Int
    $description: String
    $institution_id: Int!
  ) {
    updateLeaveCategory(
      id: $id
      name: $name
      hours: $hours
      description: $description
      institution_id: $institution_id
    ) {
      message
    }
  }
`;

// delete leave Category
export const Delete_Leave_Category = gql`
  mutation DeleteLeaveCategory($id: Int!) {
    deleteLeaveCategory(id: $id) {
      message
    }
  }
`;

//get organisation
export const GET_Organisation_Details = gql`
  query GetOrganization {
    getOrganization {
      id

      name
      document {
        name
        type
        reference_id
        doc_reference_schema
        path
        filename
      }
    }
  }
`;
// delete  organisation single one
export const Delete_Organisation = gql`
  mutation DeleteOrganization($id: Int!) {
    deleteOrganization(id: $id) {
      message
    }
  }
`;

// create Create_Organization
export const Create_Organization = gql`
  mutation AddOrganization($name: String, $org_icon: org_icon!) {
    addOrganization(name: $name, org_icon: $org_icon) {
      message
      id
      errorCode
    }
  }
`;

// Update Organisation
export const Update_Organization = gql`
  mutation updateOrganization($id: Int, $name: String, $org_icon: org_icon!) {
    updateOrganization(id: $id, name: $name, org_icon: $org_icon) {
      message
      errorCode
    }
  }
`;

// Update Password
export const Change_User_Password = gql`
  query ChangePassword($loginid: String!, $newpassword: String!) {
    changePassword(loginid: $loginid, newpassword: $newpassword) {
      message
    }
  }
`;

//get organisation
export const GET_Admin_Details_list = gql`
  query GetAdmin($organization_id: Int!) {
    getAdmin(organization_id: $organization_id) {
      id
      login {
        email_address
        login_id
        user_id
      }
      name {
        first_name
        middle_name
        last_name
      }
    }
  }
`;

export const Create_Admin = gql`
  mutation AddAdmin(
    $organization_id: Int!
    $first_name: String!
    $last_name: String!
    $institution_id: Int!
    $userName: String!
    $userPassword: String!
    $email_address: String!
  ) {
    addAdmin(
      organization_id: $organization_id
      first_name: $first_name
      last_name: $last_name
      institution_id: $institution_id
      userName: $userName
      userPassword: $userPassword
      email_address: $email_address
    ) {
      message
      id
    }
  }
`;
export const Update_Admin = gql`
  mutation UpdateAdmin(
    $id: Int!
    $first_name: String!
    $middle_name: String!
    $last_name: String!
  ) {
    updateAdmin(
      id: $id
      first_name: $first_name
      middle_name: $middle_name
      last_name: $last_name
    ) {
      message
    }
  }
`;
// delete  organisation single one
export const Delete_admin = gql`
  mutation DeleteAdmin($id: Int!) {
    deleteAdmin(id: $id) {
      message
      errorCode
    }
  }
`;
