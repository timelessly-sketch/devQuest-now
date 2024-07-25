/**
 * Namespace Api
 *
 * All backend api type
 */
declare namespace Api {
  namespace Common {
    /** common params of paginating */
    interface PaginatingCommonParams {
      /** current page number */
      current: number;
      /** page size */
      size: number;
      /** total count */
      total: number;
    }

    /** common params of paginating query list data */
    interface PaginatingQueryRecord<T = any> extends PaginatingCommonParams {
      records: T[];
    }

    /**
     * enable status
     *
     * - "1": enabled
     * - "2": disabled
     */
    type EnableStatus = '1' | '2';

    /** common record */
    type CommonRecord<T = any> = {
      /** record id */
      id: number;
      /** record create time */
      createAt: string;
      /** record update time */
      updateAt: string;
      /** record status */
      status: EnableStatus | null;
    } & T;
  }

  /**
   * namespace Auth
   *
   * backend api module: "auth"
   */
  namespace Auth {
    interface LoginToken {
      token: string;
    }

    interface MemberInfo {
      id: string;
      email: string;
      roles: string[];
    }
  }

  /**
   * namespace Route
   *
   * backend api module: "route"
   */
  namespace Route {
    type ElegantConstRoute = import('@elegant-router/types').ElegantConstRoute;

    interface MenuRoute extends ElegantConstRoute {
      id: string;
    }

    interface UserRoute {
      routes: MenuRoute[];
      home: import('@elegant-router/types').LastLevelRouteKey;
    }
  }

  /**
   * namespace SystemManage
   *
   * backend api module: "systemManage"
   */
  namespace SystemManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;
    /**
     * user gender
     *
     * - "1": "male"
     * - "2": "female"
     */
    type MemberGender = '1' | '2' | '3';

    /** user */
    type Member = Common.CommonRecord<{
      email: string;
      gender: MemberGender | null;
    }>;

    /** user list */
    type MemberList = Common.PaginatingQueryRecord<Member>;

    /**
     * 1. 普通渠道
     * 2. 兜底渠道
     */
    type ChannelType = '1' | '2';

    type Channel = Common.CommonRecord<{
      name: string;
      baseUrl: string;
      key: string;
      models: string;
      order: string;
      normal: ChannelType | null;
    }>;

    type ChannelSearchParams = CommonType.RecordNullable<
      Pick<Api.SystemManage.Channel, 'models' | 'status' | 'normal'> & CommonSearchParams
    >;

    type ChannelList = Common.PaginatingQueryRecord<Channel>;
  }
}
