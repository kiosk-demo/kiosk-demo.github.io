i18n({
  meta: {
    title: 'Kiosk | Kabob Retail Cloud',
    description:
      'Offer floor guide information setup system and content layouts. Can be used with Lookr and apply on touch screens and tablets to improve customer usage'
  },
  views: {
    main: {
      sign_out: 'Sign out',
      title: {
        dashboard: 'Dashboard',
        complex_management: 'Complex Management',
        brands_management: 'Brands Management',
        edm: 'EDM',
        layout_managenent: 'Layout Management',
        extension_management: 'Terminal Management',
        account_setting: 'Account Setting',
        settings: 'Settings'
      },
      brands: {
        brand: 'Brands',
        advanced_option: 'Advanced options',
        clear_option: 'Clear options',
        stores_amount: 'Stores amount',
        store_location: 'Store location',
        please_enter: 'Please enter name',
        multiple_choice: 'Multiple choice',
        index: {
          name: 'Name',
          category: 'Category',
          stores: 'Stores',
          contact_name: 'Contact person',
          contact_phone: 'Contact phone'
        },
        new: {
          title: 'New Brand'
        },
        form: {
          brand_name: 'Brand Name',
          brand_logo: 'Brand Logo',
          require_image: 'Please upload image with 400*400px',
          contact_person: 'Contact person',
          contact_phone: 'Contact Phone',
          category: 'Category',
          subcategory: 'Subcategory',
          description: 'Desscription',
          edm: 'EDM',
          choose_edm: 'Choose EDM',
          choose_category: 'Choose Category',
          url: 'Events Management URL'
        }
      },
      stores: {
        index: {
          department_store: 'Complex',
          building: 'Building',
          floor: 'Floor',
          contact_name: 'Contact person',
          contact_phone: 'Contact phone',
          no: 'No.',
          phone: 'Phone',
          introduction: 'Shop detailed introduction',
          name: 'Name'
        },
        new: {
          title: 'New Store'
        },
        edit: {
          title: 'Edit Store'
        },
        form: {
          basic: 'Basic',
          plugin: 'Plugin',
          h5_url: 'Tico plugin link (please go to Tico go for simple monitor link)',
          business_hour: 'Business Hours',
          theme: 'Theme Image',
          surrounding: 'Surrounding Image',
          image: 'Image',
          place_id: 'Place ID',
          qr_code: 'QR Code',
          require_qrcode: 'Please upload image with 200*200px',
          require_theme: 'Please upload image with 2000*2000px',
          require_surrounding: 'Please upload image with 600*600px'
        }
      },
      categories: {
        index: {
          applied: 'Applied: {{count}}',
          forward: 'Forward',
          backward: 'Backward',
          new_subcategory: 'New Subcategory'
        },
        new: {
          title: 'New Category'
        },
        edit: {
          title: 'Edit Category'
        },
        form: {
          name: 'Name',
          intro: 'Description',
          require_image: 'Please upload image with 200*200px'
        }
      },
      dashboards: {
        index: {
          title: 'Dashboard',
          department_store: 'Complex',
          building: 'Building',
          floor: 'Floor',
          display_links: 'Terminal',
          time: 'Time',
          seven_days: 'Last 7 days',
          thirty_days: 'Last 30 days',
          six_months: 'Last 180 days',
          year: 'Last 365 days',
          customize: 'Customized',
          statistics: 'Statistic',
          usage_count: 'Total Usage Amount',
          visits: 'visits',
          average_page: 'Average Page Views',
          pages: 'pages',
          tip_usage_count: {
            title: 'Usage amount:',
            content1: 'The number of times the terminal was visited during the period.',
            content2: 'If the terminal has the idle setting, count as one visit every time it returns to the homepage.',
            content3: 'If the terminal has no idle setting, count as one visit every 5 minutes.'
          },
          tip_average: {
            title: 'Average Page Views:',
            content: 'The average number of pages per visit during the period'
          }
        },
        show: {
          pages_views: 'Pages Views',
          page: 'Page',
          clicks: 'Clicks',
          last_stay: 'Last Stay Times',
          store_list: 'Store List',
          store_intro: 'Store Introduction',
          search_floor: 'Search by Floor',
          floor_store_list: 'Store List by Floors',
          search_category: 'Search by Category',
          facility_list: 'Public Facility List',
          store_location_map: 'Store location Map',
          facility_map: 'Public Facility Map',
          accessible_icon: 'Accessible Icon Usage',
          stores_views: 'Stores Views',
          store: 'Store',
          facilities_views: 'Public Facilities Views',
          facility: 'Public Facility'
        }
      },
      facilities: {
        index: {
          name: 'Name',
          note: 'Note',
          category: 'Category'
        },
        new: {
          title: 'New Public Facility'
        },
        edit: {
          title: 'Edit Public Facility'
        },
        form: {
          name: 'Name',
          note: 'Note',
          require_image: 'Please upload image with 240*240px'
        }
      },
      department_stores: {
        index: {
          title: 'Commercial Complex',
          no_area: 'No Area',
          name: 'Name',
          store_count: 'Stores',
          address: 'Address',
          phone: 'Phone',
          contact_name: 'Contact person',
          contact_phone: 'Contact phone',
          new_department_store: 'New Commercial Complex',
          buildings: 'Buildings',
          events: 'Events',
          announcements: 'News',
          download_roles: 'Download Roles',
          download_department_stores: 'Download Complex',
          download_bradns: 'Download Brands',
          download_display_links: 'Download Terminals',
          download_activities: 'Download Activities'
        },
        new_store: {
          title: 'New Store'
        },
        form: {
          new: 'New Department Store',
          basic_setting: 'Basic Setting',
          name: 'Name',
          phone: 'Phone',
          address: 'Address',
          intro: 'Description',
          header_image: 'Image',
          logo: 'Logo',
          contact: 'Contact',
          contact_name: 'Contact person',
          contact_phone: 'Contact phone',
          contact_email: 'Contact Email',
          work_days_intro: 'Business hours',
          traffic: 'Traffic',
          require_logo: 'Please upload image with 308*308px (display horizontal) or 308*160px (display vertical)',
          require_image: 'Please upload image with 1200*640px (display horizontal) or 2000*640px (display vertical)'
        },
        area_new: {
          title: 'New Area'
        },
        area_edit: {
          title: 'Edit Area'
        },
        area_form: {
          name: 'Name',
          map_id: 'Map ID'
        },
        buildings: {
          new_building: 'New Building',
          new_floor: 'New floor'
        },
        building_form: {
          title: 'Edit Building',
          name: 'Building Name',
          image: 'Image',
          intro: 'Description',
          intro_hint: '100 Words Maximum',
          place_id: 'Place ID'
        },
        building_floor_form: {
          title: 'Edit Floor',
          name: 'Name',
          topic: 'Topic',
          map: 'Map',
          intro: 'Description',
          facilities: 'Public Facilities',
          new_facilityt: 'New Public Facility',
          spot_name: 'Spot name',
          spot_image: 'Spot image',
          require_map: 'Please upload image with 1064*978px (display horizontal) or 1760*900px (display vertical)',
          require_spot: 'Please upload image with 600*600px'
        },
        building_floors_facility_form: {
          new: 'New Public Facility',
          edit: 'Edit Public Facility',
          facility: 'Facility',
          place_id: 'Place ID'
        },
        map: {
          title: 'Map',
          stores: 'Stores',
          facilities: 'Public Facilities',
          upload_map: 'Upload Map'
        },
        events: {
          index: {
            image: 'Image',
            name: 'Name',
            duration: 'Duration',
            location: 'Location',
            status: 'Status',
            publish: 'Publish',
            approve: 'Approve',
            reject: 'Reject',
            reclaim: 'Reclaim',
            confirm_publish: 'Are you sure you would like to publish {{name}}？',
            confirm_approve: 'Are you sure you would like to approve {{name}}？',
            confirm_reject: 'Are you sure you would like to reject {{name}}？',
            confirm_reclaim: 'Are you sure you would like to reclaim {{name}}？'
          },
          new: {
            title: 'New Event'
          },
          edit: {
            title: 'Edit Event'
          },
          form: {
            name: 'Name',
            brand: 'Brand',
            building: 'Location',
            intro: 'Description',
            start_at: 'Start at',
            end_at: 'End At',
            require_image: 'Please upload image with 1520*640px'
          },
          reject: {
            reason: 'Reason'
          }
        },
        announcements: {
          index: {
            name: 'Name',
            duration: 'Duration',
            status: 'Status',
            publish: 'Publish',
            approve: 'Approve',
            reclaim: 'Reclaim',
            confirm_publish: 'Are you sure you would like to publish {{name}}？',
            confirm_reclaim: 'Are you sure you would like to reclaim {{name}}？'
          },
          new: {
            title: 'New Announcement'
          },
          edit: {
            title: 'Edit Announcement'
          },
          form: {
            name: 'Name',
            intro: 'Description',
            start_at: 'Start at',
            end_at: 'End At'
          }
        }
      },
      edms: {
        index: {
          title: 'EDM',
          name: 'Name',
          tag_list: 'Tags'
        },
        new: {
          title: 'New EDM'
        },
        edit: {
          title: 'Edit'
        },
        form: {
          name: 'Name',
          tag_list: 'Tags',
          import_images: 'Import Images',
          require_image: 'Please upload image with 1600*1320px'
        },
        images: {
          title: 'Import Images'
        }
      },
      display_links: {
        index: {
          title: 'Terminal',
          name: 'Name',
          location: 'Location',
          daily_usage: 'Daily Usage {{usage}}',
          expired: 'Expired',
          estimated_end_date: 'Estimated End Date {{date}}'
        },
        new: {
          title: 'New Terminal'
        },
        edit: {
          title: 'Edit Terminal'
        },
        form: {
          basic: 'Basic',
          name: 'Name',
          location: 'Location',
          place_id: 'Place ID',
          terminal_content: 'Content',
          department_store: 'Complex',
          building: 'Building',
          floor: 'Floor',
          style: 'Style',
          primary_color: 'Primary Color',
          choose_layout: 'Select Layout',
          content: 'Store Configuration',
          active: 'Active',
          inactive: 'Inactive',
          upload_image: 'Upload Image',
          url: 'Url',
          preview_url: 'Preview URL',
          display_url: 'Display URL',
          return_settings: 'Idle Settings',
          return_home: 'Return Home',
          return_home_seconds: 'Idle Seconds',
          return_accessible: 'Return from Accessible Mode',
          return_accessible_seconds: 'Accessible Mode Idel Seconds',
          accessible_background: 'Accessible Background',
          require_accessible: 'Please upload image with 2160*2160px',
          display_store_map: 'Display Store Location Map',
          setting_store_configuration: 'Setting store configuration'
        },
        upload_image: {
          title: 'Upload Image',
          image_hint: 'Please upload image with 464*700px'
        },
        extension_display_link: {
          title: 'Link',
          display: 'Display',
          label: 'Terminal display link',
          apply_extension: 'Apply to other terminal',
          selected: 'Selected: {{count}} Terminals'
        }
      },
      user_locales: {
        index: {
          title: 'Languages',
          name: 'Name',
          sys_locale: 'System Languages',
          notice: 'The first one is the default language.'
        },
        new: {
          title: 'New Language'
        },
        edit: {
          title: 'Edit Language'
        },
        form: {
          name: 'Display Name',
          name_placeholder: 'Display Name',
          sys_locale: 'System Languages'
        }
      },
      settings: {
        display_links: 'Terminal',
        handicap_friendly: 'Accessible toggle',
        display_footer: 'Display footer',
        successfully_saved: 'Successfully saved',
        section: 'Section edit',
        preview: 'Preview',
        form: {
          edit: 'Edit',
          text: 'Text input',
          upload_image: 'Upload Image',
          image_hint: 'Please upload image with 948*160px'
        }
      },
      account: {
        options: {
          download: {
            dashboard_rp: 'Dashboard Report',
            permission_rp: 'Permission Report',
            record_rp: 'Activity Record Report'
          }
        },
        employees: {
          title: 'Staff Permission',
          name: 'Name',
          email: 'Email',
          permission: 'Permission',
          download_permissions: 'Download Permissions',
          permissions: {
            all: 'All',
            department_store_all: 'Complex All',
            department_store_read: 'Complex Read',
            department_store_write: 'Complex Write',
            brand_all: 'Brand All',
            brand_read: 'Brand Read',
            brand_write: 'Brand Write',
            edm_read: 'EDM Read',
            edm_write: 'EDM Write',
            layout_all: 'Layout All',
            layout_read: 'Layout Read',
            layout_write: 'Layout Write',
            display_link_all: 'Terminal Link All',
            display_link_read: 'Terminal Link Read',
            display_link_write: 'Terminal Link Write',
            setting_read: 'Setting Read',
            setting_write: 'Setting Write'
          }
        },
        activities: {
          title: 'Activity log',
          advance_options: 'Advance options',
          action: 'Action',
          target: 'Target',
          user: 'User',
          clear: 'Clear'
        }
      },
      layout: {
        index: {
          title: 'Layout Management',
          name: 'Name',
          type: 'Layout Type',
          kiosk_layout: 'Kiosk Layout',
          bricks_layout: 'Bricks Layout'
        },
        new: {
          title: 'New Layout'
        },
        edit: {
          title: 'Layout Edit'
        },
        form: {
          basic: 'Basic',
          name: 'Name',
          layout: 'Layout',
          touchable: 'Touchable',
          untouchable: 'Untouchable',
          customized: 'Customized',
          settings: 'Settings',
          display_header: 'Open Header',
          display_store_map: 'Display Store Location Map',
          layout_1: 'Layout 1',
          layout_2: 'Layout 2',
          un_layout_1: 'Untouchable Layout 1',
          rws_layout: 'RWS Layout'
        }
      }
    },
    display_links: {
      home: 'Home',
      search: 'Search',
      business_hours: 'Business Hours',
      take_me_there: 'Take me there',
      index: {
        choose_category: 'Choose Category',
        choose_subcategory: 'Choose Subcategory',
        all: 'All',
        other: 'Other',
        business_hours: 'Business Hours'
      },
      floors: {
        show: {
          brands: 'Brands',
          public_facilities: 'Public Facilities'
        }
      },
      stores: {
        show: {
          category: 'Category',
          location: 'Location',
          phone: 'Phone',
          business_hours: 'Business Hours',
          edm: 'EDM'
        }
      },
      display_links_shared: {
        map: {
          location: 'Location'
        },
        search_sidebar: {
          floors: 'Search by Floors',
          categories: 'Search by Categories'
        },
        search: {
          text: 'Please select the method to search.'
        }
      },
      facilities: {
        index: {
          title: 'Public Facilities',
          category: 'Categories',
          name: 'Name',
          location: 'Location',
          distance: 'Distance'
        }
      }
    },
    brands: {
      events: {
        index: {
          title: 'Events',
          publish: 'Publish',
          reclaim: 'Reclaim',
          apply_event: 'Apply Event',
          confirm_publish: 'Are you sure you would like to publish {{name}}？',
          confirm_reclaim: 'Are you sure you would like to reclaim {{name}}？'
        },
        new: {
          title: 'New Event'
        },
        edit: {
          title: 'Edit Event'
        },
        form: {
          name: 'Name',
          building: 'Location',
          intro: 'Description',
          start_at: 'Start at',
          end_at: 'End At'
        }
      }
    }
  },
  shared: {
    components: {
      brands_nav: {
        brands: 'Brands',
        categories: 'Categories',
        facilities: 'Public Facilities'
      },
      setting_nav: {
        languages: 'Languages',
        settings: 'Settings'
      },
      department_stores_nav: {
        edit: 'Edit',
        buildings: 'Buildings',
        events: 'Events',
        announcements: 'News'
      },
      stores_nav: {
        stores: 'Stores',
        edit: 'Edit Brand'
      },
      permissions: {
        title: 'Permission Setting',
        search: 'Search',
        all: 'All',
        assigned: 'Assigned',
        super_users: 'Super Users',
        scope: {
          departments: 'Organization',
          positions: 'Position'
        },
        type: {
          departments: 'Departments',
          shops: 'Shops',
          positions: 'Positions',
          employees: 'Employees'
        },
        read: 'Read',
        write: 'Write'
      },
      rws_map: {
        map_error: "Map isn't available due to internet connection"
      }
    }
  },
  common: {
    locale: 'English',
    ok: 'Ok',
    cancel: 'Cancel',
    unclassified: 'Unclassified',
    edit: 'Edit',
    save: 'Save',
    delete: 'Delete',
    confirm_delete: 'Are you sure you would like to delete {{name}}？',
    new_image: 'New Image',
    current_editting: 'Current Editting',
    please_select: 'Please Select',
    done: 'Done',
    permissions: 'Permissions',
    search: 'Search',
    clear: 'Clear',
    copy: 'copy',
    input_placeholder: 'please input {{input}}'
  },
  errors: {
    something_wrong: 'Something went wrong. Please try again.',
    required: 'The field is required',
    max_file_size: 'The maximum size is {{maxFileSize.humanSize}}.'
  },
  public_activity: {
    common: {
      none: 'None',
      shop_device_group: 'Device Group',
      time: 'Time',
      user: 'User',
      operation: 'Operation',
      target: 'Target',
      content: 'Content',
      ip: 'IP',
      country: 'Country',
      device: 'Device'
    },
    employee: {
      sign_in: {
        target: 'Lookr',
        description: 'signed in {{count}} times',
        name: 'Sign in'
      },
      download_report: {
        target: 'Device Daily Report',
        description: 'downloaded device daily report {{count}} times',
        name: 'Download device daily report'
      },
      download_activity: {
        target: 'Activity Report',
        description: 'downloaded activities report {{count}} times',
        name: 'Download activities report'
      },
      download_campaign_media_report: {
        target: 'Media Report',
        description: 'downloaded media report {{count}} times',
        name: 'Download media report'
      }
    },
    role_permission: {
      download: {
        target: 'Role permission report',
        description: 'download Role permission report {{count}} times'
      }
    },
    department_store_permission: {
      download: {
        target: 'Complex report',
        description: 'download Complex report {{count}} times'
      }
    },
    brand: {
      create_file: {
        target: 'brand',
        description: 'create brand profile: {{ trackable }}'
      },
      create: {
        target: 'brand',
        description: 'create brand: {{ trackable }}'
      },
      update: {
        target: 'brand',
        description: 'edit brand: {{ trackable }}'
      },
      destroy: {
        target: 'brand',
        description: 'delete brand: {{ trackable }}'
      },
      destroy_file: {
        target: 'brand',
        description: 'delete brand profile: {{ trackable }}'
      }
    },
    category: {
      create: {
        target: 'category',
        description: 'creata category: {{ trackable }}'
      },
      update: {
        target: 'category',
        description: 'edit category: {{ trackable }}'
      },
      destroy: {
        target: 'category',
        description: 'delete category: {{ trackable }}'
      },
      destroy_file: {
        target: 'category',
        description: 'delete category file: {{ trackable }}'
      },
    },
    brand_permission: {
      download: {
        target: 'Brands report',
        description: 'download Brands report {{count}} times'
      }
    },
    display_link: {
      create: {
        target: 'terminal',
        description: 'create extension: {{ trackable }}'
      },
      update: {
        target: 'terminal',
        description: 'update extension: {{ trackable }}'
      },
      destroy: {
        target: 'terminal',
        description: 'delete extension: {{ trackable }}'
      }
    },
    display_link_permission: {
      download: {
        target: '分機權限',
        description: 'download {{count}} times'
      }
    },
    edm: {
      create: {
        target: 'EDM',
        description: 'create EDM: {{ trackable }}'
      },
      update: {
        target: 'EDM',
        description: 'edit EDM: {{ trackable }}'
      },
      destroy: {
        target: 'EDM',
        description: 'delete EDM: {{ trackable }}'
      },
    },
    facility: {
      create: {
        target: 'public facility',
        description: 'create public facility: {{ trackable }}'
      },
      update: {
        target: 'public facility',
        description: 'edit public facility: {{ trackable }}'
      },
      destroy: {
        target: 'public facility',
        description: 'delete public facility: {{ trackable }}'
      },
      destroy_file: {
        target: 'public facility',
        description: 'delete public facility file: {{ trackable }}'
      }
    },
    layout_management: {
      create: {
        target: 'layout',
        description: 'create layout: {{ trackable }}'
      },
      update: {
        target: 'layout',
        description: 'edit layout: {{ trackable }}'
      },
      destroy: {
        target: 'layout',
        description: 'delete layout: {{ trackable }}'
      },
    },
    store: {
      create: {
        target: 'store',
        description: 'create store: {{ trackable }}'
      },
      update: {
        target: 'store',
        description: 'update store: {{ trackable }}'
      },
      destroy: {
        target: 'store',
        description: 'delete store: {{ trackable }}'
      },
      create_file: {
        target: 'store',
        description: 'create event image: {{ trackable }} '
      },
    },
    building_floors_facility: {
      create: {
        target: 'public facility',
        description: 'create public facility: {{ trackable }}'
      },
      update: {
        target: 'public facility',
        description: 'update public facility: {{ trackable }}'
      },
      destroy: {
        target: 'public facility',
        description: 'delete public facility: {{ trackable }}'
      },
    },
    building_floor: {
      create: {
        target: 'floor',
        description: 'create floor: {{ trackable }}'
      },
      update: {
        target: 'floor',
        description: 'update floor: {{ trackable }}'
      },
      destroy: {
        target: 'floor',
        description: 'delete floor: {{ trackable }}'
      },
    },
    event: {
      create: {
        target: 'event',
        description: 'create event: {{ trackable }}'
      },
      create_file: {
        target: 'event',
        description: 'create event image: {{ trackable }}'
      },
      update: {
        target: 'event',
        description: 'edit event: {{ trackable }}'
      },
      destroy: {
        target: 'event',
        description: 'delete event: {{ trackable }}'
      },
      destroy_file: {
        target: 'event',
        description: 'delete event image: {{ trackable }}'
      }
    },
    activity: {
      download: {
        target: 'Activities report',
        description: 'download Activities report {{count}} times'
      }
    },
    company_config: {
      update: {
        target: 'system settings',
        description: 'update system settings'
      }
    },
    user_locale: {
      create: {
        target: 'language',
        description: 'create language: {{ trackable }}'
      },
      update: {
        target: 'language',
        description: 'update language: : {{ trackable }}'
      },
      destroy: {
        target: 'language',
        description: 'delete language: {{ trackable }}'
      },
    },
    sortable_image: {
      create_file: {
        target: 'public facilities',
        description: 'Upload images of public facilities: {{ trackable }}'
      }
    },
    area: {
      create: {
        target: 'complex area',
        description: 'add new complex area: {{ trackable }}'
      },
      update: {
        target: 'complex area',
        description: 'update complex area : {{ trackable }}'
      },
      destroy: {
        target: 'complex area',
        description: 'delete complex area: {{ trackable }}'
      },
    },
    department_store: {
      create: {
        target: 'complex',
        description: 'add new complex: {{ trackable }}'
      },
      update: {
        target: 'complex',
        description: 'update complex: : {{ trackable }}'
      },
      destroy: {
        target: 'complex',
        description: 'delete complex: {{ trackable }}'
      },
    },
    building: {
      create: {
        target: 'building',
        description: 'create building: {{ trackable }}'
      },
      update: {
        target: 'building',
        description: 'update building: : {{ trackable }}'
      },
      destroy: {
        target: 'building',
        description: 'delete building: {{ trackable }}'
      },
    },
    announcement: {
      create: {
        target: 'news',
        description: 'create news: {{ trackable }}'
      },
      update: {
        target: 'news',
        description: 'update news: : {{ trackable }}'
      },
      destroy: {
        target: 'news',
        description: 'delete news: {{ trackable }}'
      },
    }
  }
});
