/* eslint-disable unicorn/filename-case */
i18n({
  meta: {
    title: 'Kiosk タッチガイドシステム | Kabob Cloud',
    description:
      'デパート向きのインフォメーション提供とフロアタッチガイドモジュール、 Lookrと連携して、タッチパネルかタブレットに配信、お客様の購買意欲を向上させる'
  },
  views: {
    main: {
      sign_out: 'サインアウト',
      title: {
        dashboard: 'ダッシュボード',
        complex_management: '別館管理',
        brands_management: 'ブランド管理',
        edm: '電子カタログ',
        layout_managenent: 'レイアウト管理',
        extension_management: 'ターミナル管理',
        account_setting: 'アカウント',
        settings: '設定'
      },
      brands: {
        brand: 'ブランド',
        advanced_option: '検索条件',
        clear_option: ' 検索条件をクリア',
        stores_amount: '店舗数',
        store_location: '店舗場所',
        please_enter: '名前を入力',
        multiple_choice: '複数',
        index: {
          name: 'ブランド',
          category: 'カテゴリー',
          stores: '支店',
          contact_name: '連絡先',
          contact_phone: 'お問い合わせ'
        },
        new: {
          title: 'ブランド追加'
        },
        edit: {
          title: 'ブランドの編集'
        },
        form: {
          brand_name: 'ブランド名',
          brand_logo: 'ブランドロゴ',
          require_image: '400 * 400pxで画像をアップロードしてください',
          contact_person: '連絡窓口',
          contact_phone: 'お問い合わせ電話',
          category: 'カテゴリー',
          subcategory: 'サブカテゴリ',
          description: '説明',
          edm: '電子カタログ',
          url: 'イベント管理URL',
          choose_edm: '電子カタログを選択',
          choose_category: 'カテゴリーを選択'
        }
      },
      stores: {
        index: {
          department_store: '別館',
          building: '別館表示',
          floor: 'フロア',
          contact_name: '連絡先',
          contact_phone: 'お問い合わせ',
          no: '店舗コード',
          phone: '店舗の電話番号',
          introduction: '詳細な紹介',
          name: '店舗名'
        },
        new: {
          title: '店舗追加'
        },
        edit: {
          title: '編集したい店舗'
        },
        form: {
          basic: '基本設定',
          plugin: 'プラグイン',
          h5_url: 'Tico プラグインリンク（簡単なモニターリンクについては Tico go にアクセスしてください）',
          business_hour: '営業時間',
          theme: 'テーマ画像',
          surrounding: '環境写真',
          image: '画像',
          place_id: 'Place ID',
          qr_code: 'QR コード',
          require_qrcode: '200 * 200pxで画像をアップロードしてください',
          require_theme: '2000 * 2000pxで画像をアップロードしてください',
          require_surrounding: '600 * 600pxで画像をアップロードしてください'
        }
      },
      categories: {
        index: {
          applied: '実装中： {{count}}',
          forward: '表示順序を１つ前へ移動する',
          backward: '表示順序を1つ後ろに移動する',
          new_subcategory: 'サブカテゴリ追加'
        },
        new: {
          title: 'カテゴリー追加'
        },
        edit: {
          title: 'カテゴリー編集'
        },
        form: {
          name: 'カテゴリー名',
          intro: '説明',
          require_image: '200 * 200pxで画像をアップロードしてください'
        }
      },
      dashboards: {
        index: {
          title: 'ダッシュボード',
          department_store: '別館',
          building: '建物',
          floor: 'フロア',
          display_links: 'ターミナル',
          time: '時間',
          seven_days: '直近7日間',
          thirty_days: '直近30日間',
          six_months: '直近180日間',
          year: '直近365日間',
          customize: 'カスタマイズ',
          statistics: '統計',
          usage_count: '総使用量',
          visits: '訪問数',
          average_page: '平均ページ閲覧数',
          pages: 'ページ数',
          tip_usage_count: {
            title: '使用量：',
            content1: '設定した期間内にターミナルが訪問された回数です。',
            content2: 'ターミナルがアイドルタイムを設定した場合は、ホーム画面に戻ると、訪問数は1回になります。',
            content3:
              'ターミナルがアイドルタイムを設定していない場合は、ターミナル画面は5分こどで訪問数は1回を計算します。'
          },
          tip_average: {
            title: '平均ページ閲覧数：',
            content: '設定した期間内に各ページ数の平均訪問回数'
          }
        },
        show: {
          pages_views: 'ページ閲覧',
          page: 'ページ名',
          clicks: '総クリック数',
          last_stay: '最終滞在回数',
          store_list: '店舗リスト',
          store_intro: '店舗紹介',
          search_floor: 'フロア検索',
          floor_store_list: 'フロアの店舗一覧',
          search_category: 'カテゴリ検索',
          facility_list: '公共施設リスト',
          store_location_map: '店舗位置マップ',
          facility_map: '公共施設位置マップ',
          accessible_icon: 'アクセシブルアイコン使用回数',
          stores_views: '店舗閲覧',
          store: '店舗',
          facilities_views: '公共施設閲覧',
          facility: '公共施設'
        }
      },
      facilities: {
        index: {
          name: '公共施設',
          note: '説明',
          category: 'カテゴリー'
        },
        new: {
          title: '公共施設追加'
        },
        edit: {
          title: '公共施設編集'
        },
        form: {
          name: '公共施設名',
          note: '説明',
          require_image: '240 * 240pxで画像をアップロードしてください'
        }
      },
      department_stores: {
        index: {
          title: '別館管理',
          no_area: 'No Area',
          name: '別館名',
          store_count: '店舗数',
          address: '住所',
          phone: '別館の電話番号',
          contact_name: '連絡先',
          contact_phone: 'お問い合わせ',
          new_department_store: '別館追加',
          buildings: '建物の設定',
          events: 'イベント管理',
          announcements: 'ニュース',
          download_roles: 'Download Roles',
          download_department_stores: 'Download Complex',
          download_bradns: 'Download Brands',
          download_display_links: 'Download Extensions',
          download_activities: 'Download Activities'
        },
        form: {
          new: '別館追加',
          basic_setting: '基本設定',
          name: '別館名',
          phone: '別館の電話番号',
          address: '住所',
          intro: '案内内容',
          header_image: '別館イメージ図',
          logo: 'Logo',
          contact: '連絡インフォメーション',
          contact_name: '連絡窓口',
          contact_phone: 'お問い合わせ',
          contact_email: 'メールアドレス',
          work_days_intro: '営業時間',
          traffic: 'アクセス',
          require_logo: 'Please upload image with 308*308px (display horizontal) or 308*160px (display vertical)',
          require_image: 'Please upload image with 1200*640px (display horizontal) or 2000*640px (display vertical)'
        },
        area_new: {
          title: 'エリア追加'
        },
        area_edit: {
          title: 'エリア編集'
        },
        area_form: {
          name: 'エリア名',
          map_id: 'Map ID'
        },
        buildings: {
          new_building: '建物追加',
          new_floor: 'フロア追加'
        },
        building_form: {
          title: '建物編集',
          name: '建物名',
          image: '画像',
          intro: '案内内容',
          intro_hint: '入力制限（100文字以内）',
          place_id: 'Place ID'
        },
        building_floor_form: {
          title: 'フロア編集',
          name: 'フロア名',
          topic: 'フロアテーマ',
          map: '地図',
          intro: 'フロア案内',
          facilities: 'Public Facilities',
          new_facilityt: 'New Public Facility',
          spot_name: 'スポット名',
          spot_image: 'スポット写真',
          require_map: 'Please upload image with 1064*978px (display horizontal) or 1760*900px (display vertical)',
          require_spot: '600 * 600pxで画像をアップロードしてください'
        },
        building_floors_facility_form: {
          new: '公共施設追加',
          edit: '公共施設編集',
          facility: '公共施設',
          place_id: 'Place ID'
        },
        map: {
          title: '地図',
          stores: '店舗',
          facilities: '公共施設',
          upload_map: '地図をアップロード'
        },
        events: {
          index: {
            image: '開催用イメージ',
            name: 'イベント名',
            duration: '開催時間',
            location: '開催場所',
            status: 'Status',
            publish: 'リリース',
            approve: 'Approve',
            reject: 'Reject',
            reclaim: '取り戻す',
            confirm_publish: 'Are you sure you would like to publish {{name}}？',
            confirm_approve: 'Are you sure you would like to approve {{name}}？',
            confirm_reject: 'Are you sure you would like to reject {{name}}？',
            confirm_reclaim: 'Are you sure you would like to reclaim {{name}}？'
          },
          new: {
            title: 'イベント追加'
          },
          edit: {
            title: 'イベント編集'
          },
          form: {
            name: 'イベント名',
            brand: 'ブランド',
            building: '開催場所',
            intro: 'あらすじ',
            start_at: '開始時間',
            end_at: '終了時間',
            require_image: '1520 * 640pxで画像をアップロードしてください'
          },
          reject: {
            reason: 'Reason'
          }
        },
        announcements: {
          index: {
            name: 'イベント名',
            duration: 'Duration',
            status: 'Status',
            publish: 'リリース',
            reclaim: '取り戻す',
            confirm_publish: 'Are you sure you would like to publish {{name}}？',
            confirm_reclaim: 'Are you sure you would like to reclaim {{name}}？'
          },
          new: {
            title: 'ニュース追加'
          },
          edit: {
            title: 'ニュース編集'
          },
          form: {
            name: 'イベント名',
            intro: 'あらすじ',
            start_at: '開始時間',
            end_at: '終了時間'
          }
        }
      },
      edms: {
        index: {
          title: '電子カタログ',
          name: '名前',
          tag_list: 'タグ'
        },
        new: {
          title: '電子カタログ追加'
        },
        edit: {
          title: '編集'
        },
        form: {
          name: '名前',
          tag_list: 'タグ',
          import_images: '画像をインポート',
          require_image: '1600 * 1320pxで画像をアップロードしてください'
        },
        images: {
          title: '画像をインポート'
        }
      },
      display_links: {
        index: {
          title: 'ターミナル',
          name: '名前',
          location: '場所',
          daily_usage: '日々の使用頻度 {{usage}}',
          expired: '失効',
          estimated_end_date: '失効予定日 {{date}}'
        },
        new: {
          title: 'ターミナル追加'
        },
        edit: {
          title: 'ターミナル編集'
        },
        form: {
          basic: '基本設定',
          name: '名前',
          location: '場所',
          place_id: 'Place ID',
          terminal_content: '店舗表示範囲',
          department_store: '別館',
          building: '建物',
          floor: 'フロア',
          style: 'スタイル',
          primary_color: 'Primary Color',
          choose_layout: 'レイアウト',
          content: '店舗構成',
          active: 'アクティブ',
          inactive: '非アクティブ',
          upload_image: '画像をアップロード',
          url: 'URL',
          preview_url: 'プレビュー URL',
          display_url: '画面 URL',
          return_settings: 'アイドル設定',
          return_home: 'ホームページに戻る',
          return_home_seconds: 'ホームアイドル時間',
          return_accessible: 'フレンドリーモードリターン',
          return_accessible_seconds: 'フレンドリーモードのアイドル時間',
          accessible_background: 'フレンドリーモードの背景',
          require_accessible: '2160 * 2160pxで画像をアップロードしてください',
          display_store_map: '店舗の地図を表示',
          setting_store_configuration: '店舗構成を設定する'
        },
        upload_image: {
          title: '画像をアップロード',
          image_hint: '464 * 700pxで画像をアップロードしてください'
        },
        extension_display_link: {
          title: 'リンク',
          display: 'ディスプレイ',
          label: 'ターミナル リンク',
          apply_extension: '他のターミナルに適用する',
          selected: '選択：{{count}} ターミナル'
        }
      },
      user_locales: {
        index: {
          title: '言語管理',
          name: '名前',
          sys_locale: '表示言語',
          notice: '最初に並べ替えるのがデフォルトの言語です'
        },
        new: {
          title: '言語追加'
        },
        edit: {
          title: '言語編集'
        },
        form: {
          name: 'タイトル',
          name_placeholder: 'タイトル',
          sys_locale: '表示言語'
        }
      },
      settings: {
        display_links: 'ターミナル',
        handicap_friendly: 'フレンドリースイッチ',
        display_footer: 'フッターを表示',
        successfully_saved: 'Successfully saved',
        section: 'セクション編集',
        preview: 'プレビュー',
        form: {
          edit: '編集',
          text: 'テキスト',
          upload_image: '画像をアップロード',
          image_hint: '948 * 160pxで画像をアップロードしてください'
        }
      },
      account: {
        options: {
          download: {
            dashboard_rp: 'ダッシュボード レポート',
            permission_rp: 'メンバー権限レポート',
            record_rp: 'イベントログレポート'
          }
        },
        employees: {
          title: 'メンバー権限',
          name: '名前',
          email: 'メール',
          permission: '権限',
          download_permissions: 'Download Permissions',
          permissions: {
            all: '全ファンクション',
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
          title: 'イベントログ',
          advance_options: 'Advance options',
          action: 'Action',
          target: 'Target',
          user: 'User',
          clear: 'Clear'
        }
      },
      layout: {
        index: {
          title: 'レイアウト管理',
          name: '名前',
          type: 'Layout Type',
          kiosk_layout: 'Kiosk レイアウト',
          bricks_layout: 'Bricks レイアウト'
        },
        new: {
          title: 'レイアウト追加'
        },
        edit: {
          title: 'レイアウト編集'
        },
        form: {
          basic: '基本設定',
          name: '名前',
          layout: 'レイアウト',
          touchable: 'タッチパネル対応テンプレート',
          untouchable: 'タッチパネル非対応テンプレート',
          customized: 'カスタムテンプレート',
          settings: 'レイアウト設定',
          display_header: 'ページヘッダを有効にする',
          display_store_map: '店舗の地図を表示',
          layout_1: 'レイアウト 1',
          layout_2: 'レイアウト 2',
          un_layout_1: 'タッチパネル非対応 レイアウト 1',
          rws_layout: 'RWS レイアウト'
        }
      }
    },
    display_links: {
      home: 'Home',
      search: '検索',
      business_hours: '営業時間:',
      take_me_there: 'Take me there',
      index: {
        choose_category: 'カテゴリーを選択',
        choose_subcategory: 'サブカテゴリを選択',
        all: '全部',
        other: 'Other',
        business_hours: '営業時間'
      },
      floors: {
        show: {
          brands: 'ブランド',
          public_facilities: '公共施設'
        }
      },
      stores: {
        show: {
          category: 'カテゴリー',
          location: '場所',
          phone: '電話',
          business_hours: '営業時間',
          edm: '電子カタログ'
        }
      },
      display_links_shared: {
        map: {
          location: '場所'
        },
        search_sidebar: {
          floors: 'フロア検索',
          categories: 'カテゴリー検索'
        },
        search: {
          text: '検索方法を選択してください。'
        }
      },
      facilities: {
        index: {
          title: '公共施設',
          category: 'カテゴリー',
          name: 'スポット名',
          location: '場所',
          distance: '距離'
        }
      }
    },
    brands: {
      events: {
        index: {
          title: 'イベント管理',
          publish: 'リリース',
          reclaim: '取り戻す',
          apply_event: 'Apply Event',
          confirm_publish: 'Are you sure you would like to publish {{name}}？',
          confirm_reclaim: 'Are you sure you would like to reclaim {{name}}？'
        },
        new: {
          title: 'イベント追加'
        },
        edit: {
          title: 'イベント編集'
        },
        form: {
          name: 'イベント名',
          building: '開催場所',
          intro: 'あらすじ',
          start_at: '開始時間',
          end_at: '終了時間'
        }
      }
    }
  },
  shared: {
    components: {
      brands_nav: {
        brands: 'ブランド',
        categories: 'カテゴリー',
        facilities: '公共施設'
      },
      setting_nav: {
        languages: '言語管理',
        settings: '設定'
      },
      department_stores_nav: {
        edit: '情報編集',
        buildings: '建物の設定',
        events: 'イベント管理',
        announcements: 'ニュース'
      },
      stores_nav: {
        stores: '店舗管理',
        edit: 'ブランドの編集'
      },
      permissions: {
        title: '権限設定',
        search: '検索',
        all: '全部',
        assigned: '権限内容',
        super_users: '管理者',
        scope: {
          departments: '組織',
          positions: '役職'
        },
        type: {
          departments: '部門',
          shops: '店舗',
          positions: '役職',
          employees: 'メンバー'
        },
        read: '閲覧者',
        write: '編集者'
      },
      rws_map: {
        map_error: "Map isn't available due to internet connection"
      }
    }
  },
  common: {
    locale: '日本語',
    ok: '確認する',
    cancel: 'キャンセルする',
    unclassified: '分類してない',
    edit: '編集',
    save: '保存',
    delete: '削除',
    confirm_delete: '{{name}}を削除しますか？',
    new_image: '新しいイメージ',
    current_editting: '現在の編集',
    please_select: 'Please Select',
    done: '終了',
    permissions: '権限設定',
    search: '検索',
    clear: 'クリア',
    copy: 'コピーする',
    input_placeholder: '請輸入{{input}}'
  },
  errors: {
    something_wrong: 'エラーが発生しました。 もう一度やり直してください。',
    required: 'これは必須フィールドで、値が必要です。',
    max_file_size: 'The maximum size is {{maxFileSize.humanSize}}.'
  },
  public_activity: {
    common: {
      none: 'None',
      shop_device_group: '端末ユニット',
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
        description: 'がにログインしました ({{count}} times)',
        name: 'がにログイン'
      },
      download_report: {
        target: 'が端末オンラインのレポート',
        description: 'が端末オンラインのレポートをダウンロードしました ({{count}} times)',
        name: 'が端末オンラインのレポートをダウンロード'
      },
      download_activity: {
        target: 'イベントログ',
        description: 'がイベントログをダウンロードしました ({{count}} times)',
        name: 'イベントログをダウンロード'
      },
      download_campaign_media_report: {
        target: 'がメディアのレポート',
        description: 'がメディアのレポートをダウンロードしました ({{count}} times)',
        name: 'がメディアのレポートをダウンロード'
      }
    },
    role_permission: {
      download: {
        target: '役割権限レポート',
        description: '役割権限レポート {{count}} 回をダウンロード'
      }
    },
    department_store_permission: {
      download: {
        target: '別館レポート',
        description: '別館レポート {{count}} 回をダウンロード'
      }
    },
    brand: {
      create_file: {
        target: 'ブランド',
        description: '{{ trackable }} 作成'
      },
      create: {
        target: 'ブランド',
        description: 'ファイル作成: {{ trackable }}'
      },
      update: {
        target: 'ブランド',
        description: 'ブランド編集: {{ trackable }}'
      },
      destroy: {
        target: 'ブランド',
        description: '{{ trackable }} 削除'
      },
      destroy_file: {
        target: 'ブランド',
        description: '{{ trackable }} 削除'
      }
    },
    category: {
      create: {
        target: 'カテゴリ',
        description: '建立分類: {{ trackable }}'
      },
      update: {
        target: 'カテゴリ',
        description: '編輯分類: {{ trackable }}'
      },
      destroy: {
        target: 'カテゴリ',
        description: '削除カテゴリ: {{ trackable }}'
      },
      destroy_file: {
        target: 'カテゴリ',
        description: '削除カテゴリ: {{ trackable }}'
      },
    },
    brand_permission: {
      download: {
        target: 'ブランドレポート',
        description: 'ブランドレポート {{count}} 回をダウンロード'
      }
    },
    display_link: {
      create: {
        target: 'ターミナル',
        description: 'ターミナル追加: {{ trackable }}'
      },
      update: {
        target: 'ターミナル',
        description: 'ターミナル更新: {{ trackable }}'
      },
      destroy: {
        target: 'ターミナル',
        description: '削除ターミナル {{ trackable }}'
      }
    },
    display_link_permission: {
      download: {
        target: '分機權限',
        description: '下載 {{count}} 次'
      }
    },
    edm: {
      create: {
        target: '電子型錄',
        description: '電子カタログ {{ trackable }} 作成'
      },
      update: {
        target: '電子型錄',
        description: '編輯電子型錄: {{ trackable }}'
      },
      destroy: {
        target: '電子型錄',
        description: '削除電子カタログ {{ trackable }}'
      },
    },
    facility: {
      create: {
        target: '公共設施',
        description: '建立公共設施: {{ trackable }}'
      },
      update: {
        target: '公共設施',
        description: '編輯公共設施: {{ trackable }}'
      },
      destroy: {
        target: '公共設施',
        description: '削除公共施設: {{ trackable }}'
      },
      destroy_file: {
        target: '公共設施',
        description: '削除公共設施: {{ trackable }}'
      }
    },
    layout_management: {
      create: {
        target: '版型',
        description: 'レイアウト {{ trackable }} 作成'
      },
      update: {
        target: '版型',
        description: '編輯版型: {{ trackable }}'
      },
      destroy: {
        target: '版型',
        description: '削除レイアウト {{ trackable }}'
      },
    },
    store: {
      create: {
        target: '店舗',
        description: '店舗追加: {{ trackable }}'
      },
      update: {
        target: '店舗',
        description: '店舗更新: {{ trackable }}'
      },
      destroy: {
        target: '店舗',
        description: '店舗移除: {{ trackable }}'
      },
      create_file: {
        target: '店舗',
        description: '{{ trackable }} 作成'
      },
    },
    building_floors_facility: {
      create: {
        target: '設施',
        description: '建立設施: {{ trackable }}'
      },
      update: {
        target: '設施',
        description: '更新設施: {{ trackable }}'
      },
      destroy: {
        target: '設施',
        description: '移除設施: {{ trackable }}'
      },
    },
    building_floor: {
      create: {
        target: '建物',
        description: '建立樓棟: {{ trackable }}'
      },
      update: {
        target: '建物',
        description: '更新樓棟: {{ trackable }}'
      },
      destroy: {
        target: '建物',
        description: '削除建物: {{ trackable }}'
      },
    },
    event: {
      create: {
        target: '活動',
        description: 'イベント作成: {{ trackable }}'
      },
      create_file: {
        target: '活動圖片',
        description: 'イベントイメージ作成: {{ trackable }}'
      },
      update: {
        target: '活動',
        description: '編輯活動: {{ trackable }}'
      },
      destroy: {
        target: '活動',
        description: '移除活動: {{ trackable }}'
      },
      destroy_file: {
        target: '活動圖片',
        description: '移除活動圖片: {{ trackable }}'
      }
    },
    activity: {
      download: {
        target: 'イベントログレポート',
        description: 'イベントログレポート {{count}} 回をダウンロード'
      }
    },
    company_config: {
      update: {
        target: 'システム設定',
        description: 'システム設定更新'
      }
    },
    user_locale: {
      create: {
        target: '言語設定',
        description: '言語追加: {{ trackable }}'
      },
      update: {
        target: '言語設定',
        description: '更新言語: : {{ trackable }}'
      },
      destroy: {
        target: '言語設定',
        description: '削除言語: {{ trackable }}'
      },
    },
    sortable_image: {
      create_file: {
        target: '公共設施',
        description: '公共施設イメージ {{ trackable }} をアップロード'
      }
    },
    area: {
      create: {
        target: '別館エリア',
        description: '新規追加別館エリア: {{ trackable }}'
      },
      update: {
        target: '別館エリア',
        description: '更新分館區域: : {{ trackable }}'
      },
      destroy: {
        target: '別館エリア',
        description: '移除分館區域: {{ trackable }}'
      },
    },
    department_store: {
      create: {
        target: '分館',
        description: '新規追加別館: {{ trackable }}'
      },
      update: {
        target: '分館',
        description: '更新分館: {{ trackable }}'
      },
      destroy: {
        target: '分館',
        description: '削除別館: {{ trackable }}'
      },
    },
    building: {
      create: {
        target: '樓棟',
        description: '新增樓棟: {{ trackable }}'
      },
      update: {
        target: '樓棟',
        description: '更新樓棟: : {{ trackable }}'
      },
      destroy: {
        target: '樓棟',
        description: '移除樓棟: {{ trackable }}'
      },
    },
    announcement: {
      create: {
        target: 'ニュース',
        description: 'ニュース {{ trackable }} 作成'
      },
      update: {
        target: 'ニュース',
        description: '更新最新消息: : {{ trackable }}'
      },
      destroy: {
        target: 'ニュース',
        description: '移除最新消息: {{ trackable }}'
      },
    }
  }
});
